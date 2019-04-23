import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './../components/nav/nav.component';
import { CatalogueSummaryComponent } from './../components/catalogue-summary/catalogue-summary.component';
import { CatalogueComponent } from 'src/components/catalogue/catalogue.component';
import { PageComponent } from './../components/page/page.component';
import { FooterComponent } from './../components/footer/footer.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';



const appRoutes: Routes = [
  { path: '', component: CatalogueSummaryComponent},
  { path: 'catalogue-summary', component: CatalogueSummaryComponent },
  { path: 'catalogue',      component: CatalogueComponent },
  { path: 'page', component: PageComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatalogueSummaryComponent,
    CatalogueComponent,
    PageComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
