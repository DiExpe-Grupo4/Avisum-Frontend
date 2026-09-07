import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-impact-numbers',
  standalone: true,
  imports: [MatIconModule],
  template: `
<div class="impact-root">
  <h2 class="page-title">IMPACTO DE NÚMEROS</h2>
  <div class="kpi-grid">
    @for (k of kpis(); track k.label) {
      <div class="impact-card">
        <mat-icon [style.color]="k.color">{{ k.icon }}</mat-icon>
        <span class="impact-val" [style.color]="k.color">{{ k.value }}</span>
        <span class="impact-label">{{ k.label }}</span>
        <span class="impact-desc">{{ k.desc }}</span>
      </div>
    }
  </div>
  <div class="trend-section sb-card">
    <p class="section-label">TENDENCIA SEMANAL — ALERTAS</p>
    <div class="trend-bars">
      @for (d of trend(); track d.day) {
        <div class="trend-col">
          <div class="trend-bar" [style.height.%]="d.pct" [style.background]="d.pct > 70 ? 'var(--sb-red)' : 'var(--sb-accent)'"></div>
          <span class="trend-day">{{ d.day }}</span>
          <span class="trend-val">{{ d.val }}</span>
        </div>
      }
    </div>
  </div>
</div>`,
  styles: [`
.impact-root { padding: 20px; }
.page-title { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:22px; color:var(--sb-white); margin-bottom:20px; }
.kpi-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:12px; margin-bottom:20px; }
.impact-card { background:var(--sb-bg-card); border:1px solid var(--sb-border); padding:20px 16px; display:flex; flex-direction:column; gap:6px; }
.impact-card mat-icon { font-size:28px; width:28px; height:28px; }
.impact-val { font-family:'Barlow Condensed',sans-serif; font-weight:900; font-size:36px; line-height:1; }
.impact-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.15em; color:var(--sb-white); text-transform:uppercase; }
.impact-desc { font-size:11px; color:var(--sb-gray); line-height:1.4; }
.section-label { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.2em; color:var(--sb-gray); text-transform:uppercase; margin-bottom:16px; }
.trend-bars { display:flex; align-items:flex-end; gap:12px; height:120px; }
.trend-col { display:flex; flex-direction:column; align-items:center; gap:4px; flex:1; height:100%; justify-content:flex-end; }
.trend-bar { width:100%; min-height:4px; border-radius:2px 2px 0 0; transition:height 0.3s; }
.trend-day { font-family:'Barlow Condensed',sans-serif; font-size:11px; color:var(--sb-gray); }
.trend-val { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:12px; color:var(--sb-white); }
`]
})
export class ImpactNumbers {
  kpis = signal([
    { icon:'directions_bus', value:'98%', label:'Rutas Operativas', desc:'Rutas con servicio activo y monitoreado', color:'var(--sb-accent)' },
    { icon:'people',         value:'+1,000', label:'Conductores', desc:'Conductores protegidos con el sistema', color:'var(--sb-accent)' },
    { icon:'trending_down',  value:'-40%', label:'Incidentes', desc:'Reducción de incidentes en últimos 6 meses', color:'var(--sb-accent)' },
    { icon:'warning',        value:'3', label:'Alertas Activas', desc:'Alertas pendientes de resolución hoy', color:'var(--sb-red)' },
    { icon:'timer',          value:'1.8 min', label:'T. Respuesta', desc:'Tiempo promedio de respuesta a alertas', color:'var(--sb-accent)' },
    { icon:'verified_user',  value:'100%', label:'Verificaciones', desc:'Conductores verificados con QR hoy', color:'var(--sb-accent)' },
  ]);
  trend = signal([
    {day:'Lun', val:5, pct:40},{day:'Mar', val:3, pct:24},{day:'Mié', val:8, pct:64},
    {day:'Jue', val:2, pct:16},{day:'Vie', val:9, pct:72},{day:'Sáb', val:6, pct:48},{day:'Dom', val:1, pct:8},
  ]);
}
