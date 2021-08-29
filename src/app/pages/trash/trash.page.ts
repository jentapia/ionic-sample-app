import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox/inbox.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
})
export class TrashPage implements OnInit {

  trashEmails = []

  constructor(private inboxService: InboxService) { }

  ngOnInit() {
    this.trashEmails = this.inboxService.getTrash()
  }

}
