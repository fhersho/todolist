import { Injectable } from '@angular/core';
import { AppSettings } from '../utilities/AppSettings';
import { HttpClient } from '@angular/common/http';
import { Developer } from '../models/developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private URL = AppSettings.API_ENDPOINT_GATEWAY + 'developers';

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.URL);
  }

  getById(id: number) {
    return this.http.get(this.URL + `/${id}`);
  }

  save(dev: Developer) {
    return this.http.post(this.URL, dev);
  }

  update(dev: Developer) {
    return this.http.put(this.URL, dev);
  }
}
