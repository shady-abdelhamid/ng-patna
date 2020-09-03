import { Component, OnInit } from '@angular/core';
import { UserSettings } from './user-settings';
import { SubscriptionType } from './subscription-type.enum';
import { InterfaceStyle } from './interface-style.enum';
import { NgForm } from '@angular/forms';
import { UserSettingsService } from './user-settings.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
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

  userSettings: UserSettings = { ...this.originalUserSettings };
  subscriptionTypes$: Observable<SubscriptionType[]>;
  constructor(private userSettingsService: UserSettingsService) {}

  ngOnInit(): void {
    this.subscriptionTypes$ = this.userSettingsService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.userSettingsService
        .postUserSettingsForm(this.userSettings)
        .subscribe(
          (result) => console.log('success:', result),
          (error) => console.log('error:', error)
        );
    }
  }
}
