import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InboxService } from './inbox.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  emails = []

  constructor(private inboxService: InboxService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.emails = this.inboxService.getEmails()
  }

  ionViewWillEnter() {
    this.emails = this.inboxService.getEmails()
  }

  /* function to use the deleteEmail function from the inboxService class to send an email from inbox page to trash page
     It shows an alert to confirm the action */
  async delEmail(id: number, email: string, subject: string, message: string) {
    //console.log(email)
    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure you want to delete this email?',
      message: 'Press Delete to delete it.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'

        },
        {
          text: 'Delete',
          handler: () => {
            this.inboxService.deleteEmail(id, email, subject, message);
            this.router.navigate(['/trash'])
          }
        }
      ]
    });
    await alertElement.present();

  }

  /* function to use the spamEmail function from the inboxService class to send an email from inbox page to spam page
    It shows an alert to confirm the action */
  async spamEmail(id: number, email: string, subject: string, message: string) {
    //console.log(email)
    const alertElement = await this.alertCtrl.create({
      header: 'Are you sure you want to send this email to Spam?',
      message: 'Press Spam to confirm.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'

        },
        {
          text: 'Spam',
          handler: () => {
            this.inboxService.spamEmail(id, email, subject, message);
            this.router.navigate(['/spam'])
          }
        }
      ]
    });
    await alertElement.present();

  }

  /* function to redirect to the page add-email to add a new email */
  newEmail() {
    this.router.navigate(['/new-email']);
  }

}
