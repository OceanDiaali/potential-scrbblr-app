
import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;
  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-731193.okta.com',
      clientId: '{0oai47xcilUaE6O98356',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'default'
      }
    });
  }
  getWidget() {
    return this.widget;
  }
}
