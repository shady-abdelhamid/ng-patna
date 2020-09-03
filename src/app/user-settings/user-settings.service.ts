import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SubscriptionType } from './subscription-type.enum';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  url = 'api/user-settings/user-settings.json';

  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // return this.http.post(this.url, userSettings);
    return of(userSettings);
  }

  getSubscriptionTypes(): Observable<SubscriptionType[]> {
    return of([
      SubscriptionType.Monthly,
      SubscriptionType.Annualy,
      SubscriptionType.Lifetime,
    ]);
  }
}
