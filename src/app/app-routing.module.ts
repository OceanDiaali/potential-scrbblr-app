import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CatalogueSummaryComponent } from 'src/components/catalogue-summary/catalogue-summary.component';
import { CatalogueComponent } from 'src/components/catalogue/catalogue.component';
import { PageComponent } from './../components/page/page.component';

import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CatalogueSummaryComponent},
  { path: 'catalogue-summary', component: CatalogueSummaryComponent },
  { path: 'catalogue',      component: CatalogueComponent },
  { path: 'page', component: PageComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    CatalogueSummaryComponent,
    CatalogueComponent,
    PageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
