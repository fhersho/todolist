import { Injectable } from '@angular/core';
import { AppSettings } from '../utilities/AppSettings';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = AppSettings.API_ENDPOINT_GATEWAY + 'tasks';

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.URL);
  }

  getById(id: number) {
    return this.http.get(this.URL + `/${id}`);
  }

  save(task: Task) {
    return this.http.post(this.URL, task);
  }

  update(task: Task) {
    return this.http.put(this.URL, task);
  }
}
