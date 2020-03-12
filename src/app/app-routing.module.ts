import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { ArticleComponent } from "./article/article.component";
import { CategoryCatalogueComponent } from "./category-catalogue/category-catalogue.component";
import { CartComponent } from "./cart/cart.component";
import { FormClientComponent } from "./form-client/form-client.component";
import { FacturationComponent } from "./facturation/facturation.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { FaqComponent } from "./faq/faq.component";
import { ClickcollectComponent } from './clickcollect/clickcollect.component';
import { PointRelaisComponent } from './point-relais/point-relais.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { MentionlegaleComponent } from './mentionlegale/mentionlegale.component';

const routes: Routes = [
  { path: "confirm", component: ConfirmComponent },
  { path: "facturation", component: FacturationComponent },
  { path: "panier", component: CartComponent },
  { path: "article/:id", component: ArticleComponent },
  { path: "category/:id", component: CategoryCatalogueComponent },
  { path: "client", component: FormClientComponent },
  { path: "faq", component: FaqComponent },
  { path: "cliandcoll", component: ClickcollectComponent },
  { path: "point-relais", component: PointRelaisComponent },
  { path: "apropos", component: AproposComponent },
  { path: "contact", component: ContactComponent },
  { path: "mentionleg", component: MentionlegaleComponent },
  { path: "**", component: CatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
