import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UsersStateService } from '../../../application/users-state.service';

@Component({
  selector: 'app-driver-management',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './driver-management.html',
  styleUrl: './driver-management.css',
})
export class DriverManagement {
  private svc = inject(UsersStateService);
  conductores = signal(this.svc.getConductores());
  selected    = signal<number | null>(null);
  searchTerm  = signal('');

  get filtered() {
    const t = this.searchTerm().toLowerCase();
    return this.conductores().filter((c: any) =>
      c.nombre.toLowerCase().includes(t) || c.apellido.toLowerCase().includes(t) || c.dni.includes(t)
    );
  }

  estadoColor(e: string) { return e === 'ACTIVO' ? 'var(--sb-accent)' : 'var(--sb-gray)'; }
}
