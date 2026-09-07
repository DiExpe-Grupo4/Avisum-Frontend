import { Injectable } from '@angular/core';
import { UnidadBus } from '../domain/model/unidad-bus.entity';
import { Turno } from '../domain/model/turno-historial.entity';

@Injectable({ providedIn: 'root' })
export class MonitoringDataService {

  getUnidades(): UnidadBus[] {
    return [
      new UnidadBus({ id:1, placa:'ABC-1234', conductor:'Marcos E. Silva', ruta:'R-42', estado:'ACTIVO',   lat:-12.0464, lng:-77.0428, pasajeros:32, velocidad:48 }),
      new UnidadBus({ id:2, placa:'DEF-5678', conductor:'Juan Quispe',     ruta:'R-15', estado:'ACTIVO',   lat:-12.0600, lng:-77.0300, pasajeros:18, velocidad:52 }),
      new UnidadBus({ id:3, placa:'GHI-9012', conductor:'Pedro Mamani',    ruta:'R-07', estado:'ALERTA',   lat:-12.0700, lng:-77.0500, pasajeros:45, velocidad:75 }),
      new UnidadBus({ id:4, placa:'JKL-3456', conductor:'Miguel Flores',   ruta:'R-22', estado:'ACTIVO',   lat:-12.0900, lng:-77.0600, pasajeros:10, velocidad:40 }),
      new UnidadBus({ id:5, placa:'MNO-7890', conductor:'Luis Ccama',      ruta:'R-33', estado:'INACTIVO', lat:-12.1000, lng:-77.0200, pasajeros:0,  velocidad:0  }),
      new UnidadBus({ id:6, placa:'PQR-1234', conductor:'Carlos Huanca',   ruta:'R-42', estado:'ACTIVO',   lat:-12.0300, lng:-77.0100, pasajeros:27, velocidad:55 }),
      new UnidadBus({ id:7, placa:'STU-5678', conductor:'Roberto Apaza',   ruta:'R-08', estado:'ACTIVO',   lat:-12.0200, lng:-77.0400, pasajeros:38, velocidad:43 }),
    ];
  }

  getHistorial(): Turno[] {
    return [
      new Turno({ id:1, conductorId:1, busId:'ABC-1234', rutaNombre:'R-42', rutaOrigen:'Terminal Norte', rutaDestino:'Estación Central', distanciaKm:32.5, tiempoSegundos:0, pasajeros:45, recaudacion:890,  estado:'FINALIZADO', fechaInicio:new Date('2025-04-25'), fechaFin:new Date('2025-04-25') }),
      new Turno({ id:2, conductorId:2, busId:'DEF-5678', rutaNombre:'R-15', rutaOrigen:'Terminal Norte', rutaDestino:'Estación Central', distanciaKm:28.0, tiempoSegundos:0, pasajeros:38, recaudacion:760,  estado:'FINALIZADO', fechaInicio:new Date('2025-04-25'), fechaFin:new Date('2025-04-25') }),
      new Turno({ id:3, conductorId:3, busId:'GHI-9012', rutaNombre:'R-07', rutaOrigen:'Terminal Norte', rutaDestino:'Estación Central', distanciaKm:15.2, tiempoSegundos:0, pasajeros:22, recaudacion:440,  estado:'ACTIVO',     fechaInicio:new Date('2025-04-26'), fechaFin:null }),
      new Turno({ id:4, conductorId:4, busId:'JKL-3456', rutaNombre:'R-22', rutaOrigen:'Terminal Norte', rutaDestino:'Estación Central', distanciaKm:40.0, tiempoSegundos:0, pasajeros:60, recaudacion:1200, estado:'FINALIZADO', fechaInicio:new Date('2025-04-26'), fechaFin:new Date('2025-04-26') }),
      new Turno({ id:5, conductorId:1, busId:'ABC-1234', rutaNombre:'R-42', rutaOrigen:'Terminal Norte', rutaDestino:'Estación Central', distanciaKm:33.1, tiempoSegundos:0, pasajeros:50, recaudacion:1000, estado:'FINALIZADO', fechaInicio:new Date('2025-04-24'), fechaFin:new Date('2025-04-24') }),
    ];
  }
}
