import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { HttpClientModule } from "@angular/common/http";
import { ArticleComponent } from "./article/article.component";
import { NavComponent } from "./nav/nav.component";
import { CategoryCatalogueComponent } from "./category-catalogue/category-catalogue.component";
import { CartComponent } from "./cart/cart.component";
import { FormClientComponent } from "./form-client/form-client.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FacturationComponent } from "./facturation/facturation.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { FaqComponent } from './faq/faq.component';
import { ClickcollectComponent } from './clickcollect/clickcollect.component';
import { PointRelaisComponent } from './point-relais/point-relais.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { MentionlegaleComponent } from './mentionlegale/mentionlegale.component';
import { OutStockComponent } from './out-stock/out-stock.component';

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
    ConfirmComponent,
    FaqComponent,
    ClickcollectComponent,
    PointRelaisComponent,
    AproposComponent,
    ContactComponent,
    MentionlegaleComponent,
    OutStockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
