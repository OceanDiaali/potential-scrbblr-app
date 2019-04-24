import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Okta } from './shared/okta/okta.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './../components/nav/nav.component';
import { FooterComponent } from './../components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,

    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [Okta],
  bootstrap: [AppComponent]
})
export class AppModule { }
