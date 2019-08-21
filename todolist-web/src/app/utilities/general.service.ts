import { Injectable } from '@angular/core';
import { Response, RequestOptions, URLSearchParams } from '@angular/http';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppSettings } from './AppSettings';
/**
 * Clase para configurar servicios genericos, esta clase es heredable
 */
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  protected URL_GATEWAY = AppSettings.API_ENDPOINT_GATEWAY;

  protected contentType = 'application/json';
  private headers: HttpHeaders;
  protected respuestaHttp: any;
  protected params: any;

  constructor(public _http: HttpClient) { }

  /**
   *  Función para obtener datos dado una url y un token
   *
   * @param url path a consultar el servicio web
   */
  public get(url): Observable<any> {
    const token = AppSettings.getHeaders();
    if (token) {
      token['Content-Type'] = 'application/json';
    }

    this.headers = !!token
      ? new HttpHeaders(token)
      : new HttpHeaders({ 'Content-Type': 'application/json' });

    const options = { headers: this.headers };

    return (
      this._http
        .get(url, options)
        // .pipe(map(response => response.json()))
        .pipe(catchError(this.handleError))
    );
  }

  /**
   * Función para obtener datos dado una url, pero obteniendo el response completo
   * @param url URL a llamar el servicio
   */
  public getFullResponse(url): Observable<HttpResponse<any>> {
    // const token = AppSettings.getHeaders().Authorization;
    const token = AppSettings.getHeaders();
    if (token) {
      token['Content-Type'] = 'application/json';
    }
    this.headers = !!token ? new HttpHeaders(token) : new HttpHeaders({ 'Content-Type': 'application/json' });

    // const options = { headers: this.headers, observe: 'response' };

    return this._http.get<any>(url, { headers: this.headers, observe: 'response' });
  }

  /**
   * Función para enviar datos, ya sea edición, crear, etc.
   *
   * @param url path a consultar el servicio web
   * @param params contenido del body a enviar en la URL post
   */
  public post(url, params): Observable<any> {
    // const token = AppSettings.getHeaders().Authorization;
    const token = AppSettings.getHeaders();
    if (token) {
      token['Content-Type'] = 'application/json';
    }
    this.headers = !!token
      ? new HttpHeaders(token)
      : new HttpHeaders({ 'Content-Type': 'application/json' });

    const options = { headers: this.headers };
    const body = JSON.stringify(params);

    return this._http
      .post(url, body, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Función post especial para obtener archivos
   *
   * @param url path a consultar el servicio web
   * @param token token para la autorización al acceso del servicio web
   */
  public postFile(url: string): Observable<any> {
    const token = AppSettings.getHeaders();
    if (token) {
      token['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    this.headers = !!token
      ? new HttpHeaders(token)
      : new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const options = { headers: this.headers, responseType: 'blob' };

    const formData: FormData = new FormData();
    const tokenAuth = token.Authorization;

    formData.append('security', tokenAuth.split(' ')[1]);

    return this._http
      .post(url, formData, { headers: new HttpHeaders({
                            'Authorization': `${token.Authorization}`,
                            'Content-Type': 'application/x-www-form-urlencoded',
                            }), responseType: 'blob'})
      // .pipe(timeout(1200000)) // Tiempo en milisegundos
      // .pipe(timeout(120))
      .pipe(catchError(this.handleError));
  }

  public put(url, params): Observable<any> {
    // const token = AppSettings.getHeaders().Authorization;
    const token = AppSettings.getHeaders();
    if (token) {
      token['Content-Type'] = 'application/json';
    }
    this.headers = !!token
      ? new HttpHeaders(token)
      : new HttpHeaders({ 'Content-Type': 'application/json' });

    const options = { headers: this.headers };
    const body = JSON.stringify(params);

    return this._http
      .put(url, body, options)
      .pipe(catchError(this.handleError));
  }

  public remove(url, params): Observable<any> {
    // const token = AppSettings.getHeaders().Authorization;
    const token = AppSettings.getHeaders();
    if (token) {
      token['Content-Type'] = 'application/json';
    }

    this.headers = !!token
      ? new HttpHeaders(token)
      : new HttpHeaders({ 'Content-Type': 'application/json' });

   // const options = { headers: this.headers };
    const body = JSON.stringify(params);
    const options = {
      headers: this.headers,
      body: body,
    };

    return this._http.delete(url, options);
    // .pipe(map(response => response.json()));
  }

  protected extractHeader(res: Response) {
    return res.headers.get('X-Pagination-Total');
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // throw error;
    // return an observable with a user-facing error message
    return throwError(error);
  }

  protected getParams(param: any): URLSearchParams {
    const params: URLSearchParams = new URLSearchParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const val = param[key];
        params.set(key, val);
      }
    }
    return params;
  }
}
