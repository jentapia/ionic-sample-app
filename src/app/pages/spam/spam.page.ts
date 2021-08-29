import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox/inbox.service';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.page.html',
  styleUrls: ['./spam.page.scss'],
})
export class SpamPage implements OnInit {

  spamEmails = []

  constructor(private inboxService: InboxService) { }

  ngOnInit() {
    this.spamEmails = this.inboxService.getSpam()
  }

}
