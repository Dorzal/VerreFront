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
  
  addCart(cartItems, qty, articleId){
    const index : number = cartItems.indexOf(articleId);
    if (index !== -1) {
      qty[index] = qty[index] + 1;
      localStorage.setItem( "qty", JSON.stringify({"qty" : qty}));
    }else {
      cartItems.push(articleId);
      localStorage.setItem( "cart", JSON.stringify({"items" : cartItems}));
      qty.push(1);
      localStorage.setItem( "qty", JSON.stringify({"qty" : qty}));
    }
    
  }

  deleteItems(cartItems, qty, articleId){
    let tab = cartItems.items
    let qt = qty.qty
    const index : number = tab.indexOf(articleId);
    if (index !== -1) {
      tab.splice(index, 1);
      qt.splice(index, 1);
    }
    localStorage.setItem( "cart", JSON.stringify({"items" : tab}));
    localStorage.setItem( "qty", JSON.stringify({"qty" : qt}));
  }

}
