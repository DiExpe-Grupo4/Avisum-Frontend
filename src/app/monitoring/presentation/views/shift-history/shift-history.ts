import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe, DatePipe } from '@angular/common';
import { MonitoringDataService } from '../../../application/monitoring-data.service';
import { UsersStateService } from '../../../../users/application/users-state.service';

@Component({
  selector: 'app-shift-history',
  standalone: true,
  imports: [MatIconModule, DecimalPipe, DatePipe],
  template: `
<div class="sh-root">
  <h2 class="page-title">HISTORIAL DE TURNOS</h2>
  <div class="shift-table">
    <div class="sh-header">
      <span>CONDUCTOR</span><span>BUS</span><span>RUTA</span><span>FECHA</span>
      <span>KM</span><span>PASAJEROS</span><span>RECAUDACIÓN</span><span>ESTADO</span>
    </div>
    @for (t of historial(); track t.id) {
      <div class="sh-row">
        <span class="sh-name">{{ nombreConductor(t.conductorId) }}</span>
        <span class="sh-mono">{{ t.busId }}</span>
        <span class="sh-mono">{{ t.rutaNombre }}</span>
        <span class="sh-mono">{{ t.fechaInicio | date:'yyyy-MM-dd' }}</span>
        <span class="sh-val">{{ t.distanciaKm | number:'1.1-1' }}</span>
        <span class="sh-val">{{ t.pasajeros }}</span>
        <span class="sh-accent">\${{ t.recaudacion | number:'1.0-0' }}</span>
        <span class="sh-estado" [style.color]="estadoColor(t.estado)">{{ t.estado }}</span>
      </div>
    }
  </div>
</div>`,
  styles: [`
.sh-root { padding: 20px; }
.page-title { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:22px; color:var(--sb-white); margin-bottom:20px; }
.shift-table { background:var(--sb-bg-card); border:1px solid var(--sb-border); }
.sh-header,.sh-row { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; padding:10px 16px; border-bottom:1px solid var(--sb-border); align-items:center; gap:8px; }
.sh-header { background:var(--sb-bg-card2); }
.sh-header span { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:10px; letter-spacing:0.15em; color:var(--sb-gray); }
.sh-row:hover { background:var(--sb-bg-card2); }
.sh-name { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; color:var(--sb-white); }
.sh-mono { font-family:'Share Tech Mono',monospace; font-size:11px; color:var(--sb-gray); }
.sh-val { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; color:var(--sb-white); }
.sh-accent { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:13px; color:var(--sb-accent); }
.sh-estado { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:11px; }
`]
})
export class ShiftHistory {
  private svc   = inject(MonitoringDataService);
  private users = inject(UsersStateService);

  historial = toSignal(this.svc.getHistorial(), { initialValue: [] });

  nombreConductor(id: number): string {
    const c = this.users.getConductores().find(c => c.id === id);
    return c ? c.nombreCompleto : `#${id}`;
  }

  estadoColor(e: string) { return e === 'FINALIZADO' ? 'var(--sb-accent)' : e === 'ALERTA' ? 'var(--sb-red)' : 'var(--sb-gray)'; }
}
