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
  
  addCart(cartItems, articleId){
    cartItems.push(articleId);
    localStorage.setItem( "cart", JSON.stringify({"items" : cartItems}));
  }

  deleteItems(cartItems, articleId){
    let tab = cartItems.items
    const index : number = tab.indexOf(articleId);
    if (index !== -1) {
      tab.splice(index, 1);
    }
    localStorage.setItem( "cart", JSON.stringify({"items" : tab}));
  }

}
