import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ArticleComponent } from './article/article.component';
import { CategoryCatalogueComponent } from './category-catalogue/category-catalogue.component';
import { CartComponent } from './cart/cart.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FacturationComponent } from './facturation/facturation.component';


const routes: Routes = [
  { path: "facturation", component: FacturationComponent },
  { path: "panier", component: CartComponent},
  { path: "article/:id", component: ArticleComponent},
  { path: "category/:id", component: CategoryCatalogueComponent},
  { path: "client", component: FormClientComponent},
  { path: "**", component: CatalogueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
