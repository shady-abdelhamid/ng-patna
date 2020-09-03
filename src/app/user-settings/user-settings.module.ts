import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UserSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserSettingsRoutingModule
  ]
})
export class UserSettingsModule { }
