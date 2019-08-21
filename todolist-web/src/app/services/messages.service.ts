import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../models/Message';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private subject = new Subject<Message>();

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.clear();
      }
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  add(message: string) {
    this.message(new Message(message));
  }

  addMessage(message: Message) {
    this.message(message);
  }

  private message(message: Message) {
    this.subject.next(message);
  }

  clear() {
    this.subject.next();
  }
}
