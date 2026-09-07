import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DriversApiEndpoint } from '../../users/infrastructure/drivers-api-endpoint';
import { Driver } from '../../users/domain/model/driver.entity';
import { DriverAssembler } from '../../users/infrastructure/driver-assembler';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class IamApi {
  private http = inject(HttpClient);
  private endpoint = new DriversApiEndpoint(this.http);
  private assembler = new DriverAssembler();

  getAll(): Observable<Driver[]>           { return this.endpoint.getAll(); }
  getById(id: number): Observable<Driver>  { return this.endpoint.getById(id); }
  create(c: Driver): Observable<Driver>    { return this.endpoint.create(c); }
  update(c: Driver): Observable<Driver>    { return this.endpoint.update(c, c.id); }

  /** Verifica la identidad de un conductor a partir de su código de empleado. */
  verifyByCode(codigo: string): Observable<Driver | null> {
    const url = `${environment.platformProviderApiBaseUrl}/employees/code/${codigo}`;
    return this.http.get<any>(url).pipe(
      map(response => response ? this.mapEmployeeToDriver(response) : null)
    );
  }

  private mapEmployeeToDriver(employee: any): Driver {
    const partes = (employee.fullName ?? '').trim().split(' ');
    const nombre = partes.shift() ?? employee.fullName ?? '';
    const apellido = partes.join(' ');
    return new Driver({
      id: employee.id,
      nombre,
      apellido,
      dni: '',
      codigoEmpleado: employee.employeeCode,
      codigoQr: `QR-${employee.employeeCode}`,
      placa: '',
      estado: 'ACTIVO',
      foto: `https://i.pravatar.cc/80?u=${employee.employeeCode}`,
    });
  }

  getMockList(): Driver[] { return []; }
}
