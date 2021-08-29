import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmailPageRoutingModule } from './add-email-routing.module';

import { AddEmailPage } from './add-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddEmailPageRoutingModule
  ],
  declarations: [AddEmailPage]
})
export class AddEmailPageModule { }
