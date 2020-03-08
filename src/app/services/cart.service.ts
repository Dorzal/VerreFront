import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Article from '../models/Article';
import { AppComponent } from '../app.component';

const apiUrl = `${environment.rootUrl}/carts`;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  
  addCart(cartItems, qty, article){
    let index = 0;
    let valeur;
    cartItems.forEach(element => {

      if (element.id != article.id) {
        
        valeur = true
        index ++;
      }else{
        valeur = false;
      }
    });

    if (true === valeur){
      cartItems.push(article);
      localStorage.setItem( "cart", JSON.stringify({"items" : cartItems}));
       qty.push(1);
      localStorage.setItem( "qty", JSON.stringify({"qty" : qty}));
    }
    if(false === valeur){
      qty[index] = qty[index] +1;
      localStorage.setItem( "qty", JSON.stringify({"qty" : qty}));
    }
  }

  deleteItems(cartItems, qty, article){
    let tab = cartItems.items
    let qt = qty.qty
    const index : number = tab.indexOf(article);
    if (index !== -1) {
      tab.splice(index, 1);
      qt.splice(index, 1);
    }
    localStorage.setItem( "cart", JSON.stringify({"items" : tab}));
    localStorage.setItem( "qty", JSON.stringify({"qty" : qt}));
  }

}
