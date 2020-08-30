import { Component, OnInit } from '@angular/core';
import { UserSettings } from './user-settings';
import { SubscriptionType } from './subscription-type.enum';
import { InterfaceStyle } from './interface-style.enum';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
    password: null,
  };

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {

  }

}
