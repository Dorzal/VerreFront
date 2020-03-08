import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleComponent } from './article/article.component';
import { NavComponent } from './nav/nav.component';
import { CategoryCatalogueComponent } from './category-catalogue/category-catalogue.component';
import { CartComponent } from './cart/cart.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturationComponent } from './facturation/facturation.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ArticleComponent,
    NavComponent,
    CategoryCatalogueComponent,
    CartComponent,
    FormClientComponent,
    FacturationComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
