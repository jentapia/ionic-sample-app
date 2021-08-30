import { Injectable } from '@angular/core';
import { Email } from './inbox.email.model';

@Injectable({
  providedIn: 'root'
})

// Service to manage displaying emails, deleting emails (send to trash page) and sending emails to spam page
export class InboxService {

  private counterId = 10

  private emails: Email[] = [
    {
      id: 1,
      email: "email1@email.com",
      subject: "First subject",
      message: "This is a fake first email. Thanks"
    },
    {
      id: 2,
      email: "email2@email.com",
      subject: "Second subject",
      message: "This is a fake second email. Thanks"
    },
    {
      id: 3,
      email: "email3@email.com",
      subject: "Third subject",
      message: "This is a fake third email. Thanks"
    },
    {
      id: 4,
      email: "email4@email.com",
      subject: "Fourth subject",
      message: "This is a fake fourth email. Thanks"
    },
    {
      id: 5,
      email: "email5@email.com",
      subject: "Fifth subject",
      message: "This is a fake fifth email. Thanks"
    },
    {
      id: 6,
      email: "email6@email.com",
      subject: "Sixth subject",
      message: "This is a fake sixth email. Thanks"
    },
    {
      id: 7,
      email: "email7@email.com",
      subject: "Seventh subject",
      message: "This is a fake seventh email. Thanks"
    },
    {
      id: 8,
      email: "email8@email.com",
      subject: "Eighth subject",
      message: "This is a fake eighth email. Thanks"
    },
    {
      id: 9,
      email: "email9@email.com",
      subject: "Nineth subject",
      message: "This is a fake nineth email. Thanks"
    },
    {
      id: 10,
      email: "email10@email.com",
      subject: "Tenth subject",
      message: "This is a fake tenth email. Thanks"
    }
  ]

  private trashEmails: Email[] = []

  private spamEmails: Email[] = []

  constructor() { }

  getEmails() {
    return [...this.emails]
  }

  getSpam() {
    return [...this.spamEmails]
  }

  getTrash() {
    return [...this.trashEmails]
  }

  addEmail(email: string, subject: string, message: string) {
    this.emails.push({
      id: this.counterId + 1,
      email,
      subject,
      message
    })
    this.counterId++
    //console.log(this.counterId)
  }

  deleteEmail(idD: number, emailD: string, subjectD: string, messageD: string) {
    this.emails = this.emails.filter(id => {
      return id.id !== idD
    })
    this.trashEmails.push({
      id: idD,
      email: emailD,
      subject: subjectD,
      message: messageD
    })
  }

  spamEmail(idSp: number, emailSp: string, subjectSp: string, messageSp: string) {
    this.emails = this.emails.filter(id => {
      return id.id !== idSp
    })
    this.spamEmails.push({
      id: idSp,
      email: emailSp,
      subject: subjectSp,
      message: messageSp
    })
  }
}
