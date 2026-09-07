import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { ShiftTrackingService } from '../../../application/shift-tracking.service';

@Component({
  selector: 'app-driver-dashboard',
  standalone: true,
  imports: [MatIconModule, MatCheckboxModule, FormsModule, DecimalPipe],
  templateUrl: './driver-dashboard.html',
  styleUrl: './driver-dashboard.css',
})
export class DriverDashboard {
  private router  = inject(Router);
  readonly state  = inject(ShiftTrackingService);

  // Apuntan directo a las señales centrales del state service,
  // así que no se reinician al navegar entre pantallas.
  tiempoStr   = this.state.tiempoStr;
  distancia   = this.state.distanciaKm;
  pasajeros   = this.state.pasajeros;
  recaudacion = this.state.recaudacion;

  check1 = signal(false);
  check2 = signal(false);
  check3 = signal(false);
  showFinishModal = signal(false);

  gpsStatus   = signal('ESTABLE');
  telStatus   = signal('SINCRO');
  cloudStatus = signal('ACTIVA');

  viewMap()    { this.router.navigate(['/conductor/view-map']); }
  openFinish() { this.showFinishModal.set(true); }
  cancelFinish() { this.showFinishModal.set(false); }

  confirmFinish() {
    this.state.finalizarTurno();
    this.showFinishModal.set(false);
    this.router.navigate(['/conductor/service-summary']);
  }
}
