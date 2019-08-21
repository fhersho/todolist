import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  message: Message;
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.getMessage().subscribe((message: Message) => {
      if (!message) {
        this.message = null;
        return;
      }

      this.message = message;
    });
  }

}
