import { Injectable, signal, computed } from '@angular/core';
import { Driver } from '../domain/model/driver.entity';

@Injectable({ providedIn: 'root' })
export class UsersStateService {

  private readonly conductoresMock: Driver[] = [
    new Driver({ id:1, nombre:'MARCOS E.', apellido:'SILVA',  dni:'12345678', codigoEmpleado:'EMP-001', codigoQr:'QR-SF-90210-TX', placa:'ABC-1234', estado:'ACTIVO',   foto:'https://i.pravatar.cc/80?img=11' }),
    new Driver({ id:2, nombre:'JUAN',      apellido:'QUISPE', dni:'23456789', codigoEmpleado:'EMP-002', codigoQr:'QR-SF-90211-TX', placa:'DEF-5678', estado:'ACTIVO',   foto:'https://i.pravatar.cc/80?img=12' }),
    new Driver({ id:3, nombre:'PEDRO',     apellido:'MAMANI', dni:'34567890', codigoEmpleado:'EMP-003', codigoQr:'QR-SF-90212-TX', placa:'GHI-9012', estado:'INACTIVO', foto:'https://i.pravatar.cc/80?img=13' }),
    new Driver({ id:4, nombre:'MIGUEL',    apellido:'FLORES', dni:'45678901', codigoEmpleado:'EMP-004', codigoQr:'QR-SF-90213-TX', placa:'JKL-3456', estado:'ACTIVO',   foto:'https://i.pravatar.cc/80?img=14' }),
    new Driver({ id:5, nombre:'LUIS',      apellido:'CCAMA',  dni:'56789012', codigoEmpleado:'EMP-005', codigoQr:'QR-SF-90214-TX', placa:'MNO-7890', estado:'ACTIVO',   foto:'https://i.pravatar.cc/80?img=15' }),
    new Driver({ id:6, nombre:'CARLOS',    apellido:'HUANCA', dni:'67890123', codigoEmpleado:'EMP-006', codigoQr:'QR-SF-90215-TX', placa:'PQR-1234', estado:'ACTIVO',   foto:'https://i.pravatar.cc/80?img=16' }),
    new Driver({ id:7, nombre:'ROBERTO',   apellido:'APAZA',  dni:'78901234', codigoEmpleado:'EMP-007', codigoQr:'QR-SF-90216-TX', placa:'STU-5678', estado:'ACTIVO',   foto:'https://i.pravatar.cc/80?img=17' }),
  ];

  readonly conductores = signal<Driver[]>(this.conductoresMock);
  readonly selected    = signal<number | null>(null);
  readonly searchTerm  = signal('');

  readonly filtered = computed(() => {
    const t = this.searchTerm().toLowerCase();
    return this.conductores().filter((c) =>
      c.nombre.toLowerCase().includes(t) || c.apellido.toLowerCase().includes(t) || c.dni.includes(t)
    );
  });

  getConductores(): Driver[] { return this.conductores(); }
}
