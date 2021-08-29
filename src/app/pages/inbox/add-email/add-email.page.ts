import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InboxService } from '../inbox.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.page.html',
  styleUrls: ['./add-email.page.scss'],
})
export class AddEmailPage implements OnInit {

  formGroup: FormGroup;

  constructor(private inboxService: InboxService, private router: Router, public formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      emailControl: ["", Validators.compose([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required])
      ],
      subjectControl: ["", Validators.required],
      messageControl: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(formData: any) {
    // console.log(formData);
    this.inboxService.addEmail(formData.emailControl, formData.subjectControl, formData.messageControl);
    this.router.navigate(['/inbox']);
  }

  // show error messages when the input is incorrect
  validation_messages = {
    'emailControl': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'subjectControl': [
      { type: 'required', message: 'Subject is required.' }
    ],
    'messageControl': [
      { type: 'required', message: 'Message is required.' }
    ]
  }


}
