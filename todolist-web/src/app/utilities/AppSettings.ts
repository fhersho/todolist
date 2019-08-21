import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
   public static _API_ENDPOINT_GATEWAY = 'http://localhost:8181/';
  // public static _API_ENDPOINT_GATEWAY = 'http://192.99.14.27:8181/';
  public static formatDate = 'dd/MM/yyyy';

  /**
   * Se convierte en una variable con getter la cual busca en la ventana
   * padre la url base del gateway, si no existe toma el valor definido por defecto
   */

  public static get API_ENDPOINT_GATEWAY(): string {
    return top.window['xui'] && top.window['xui']['getConfiguration']
      ? top.window['xui']['getConfiguration']().urlGateway + '/'
      : this._API_ENDPOINT_GATEWAY;
  }

  public static HEADERS = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  public static getHeaders() {
    return top.window['xui'] ? top.window['xui'].header() : {};
  }

}
