import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { ShiftTrackingService } from '../../../application/shift-tracking.service';
import { AuthStateService } from '../../../../iam/application/auth-state.service';

@Component({
  selector: 'app-service-summary',
  standalone: true,
  imports: [MatIconModule, DecimalPipe],
  templateUrl: './service-summary.html',
  styleUrl: './service-summary.css',
})
export class ServiceSummary {
  private router = inject(Router);
  private auth   = inject(AuthStateService);
  readonly state = inject(ShiftTrackingService);

  get turno() { return this.state.turnoActual(); }

  formatTime(s: number): string {
    const h = Math.floor(s / 3600).toString().padStart(2, '0');
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${h}:${m}:${sec}`;
  }

  newService() {
    this.auth.clearConductor();
    this.state.resetTurno();
    this.router.navigate(['/conductor/login']);
  }
}
