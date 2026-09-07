export const environment = {
  production: true,
  //carlos, si lees esto, por favor no cambies la url de la api todavia, amenos que ya hayas creado uno nuevo con Avisum, ya que es la que esta en produccion y es la que se usa para el despliegue de la app. Si quieres hacer pruebas, crea un archivo environment.development.ts y ahi si puedes cambiar la url de la api para hacer pruebas. ty 🦍.
  platformProviderApiBaseUrl: 'https://safebus-backend-production.up.railway.app/api/v1',
  platformProviderConductoresEndpointPath: '/employees',
  platformProviderTurnosEndpointPath: '/drivers',
  platformProviderAlertasEndpointPath: '/alerts',
  platformProviderPasajerosEndpointPath: '/bus-units',
  platformProviderUnidadesEndpointPath: '/bus-units',
  platformProviderAdminEndpointPath: '/employees',
  platformProviderDriversEndpointPath: '/drivers',
  platformProviderSensorsEndpointPath: '/sensors',
};
