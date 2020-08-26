import { Component, OnInit } from '@angular/core';
import { UserSettings } from './user-settings';
import { SubscriptionType } from './subscription-type.enum';
import { InterfaceStyle } from './interface-style.enum';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Adam',
    emailOffers: true,
    interfaceStyle: InterfaceStyle.dark,
    subscriptionType: SubscriptionType.Annualy,
    notes: 'Here are some notes...',
    password: 'secret123'
  };

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor() { }

  ngOnInit(): void {
  }

}
