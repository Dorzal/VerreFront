import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Order from '../models/Order';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ', 'Access-Control-Allow-Origin' : '*'})
};
const apiUrl = `${environment.rootUrl}/commande`

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }


  addOrder(nb , total){
    let client = JSON.parse(localStorage.getItem('client'));
    let cart = JSON.parse(localStorage.getItem('cart'));
    let shop = JSON.parse(localStorage.getItem('boutique'));
    let qty = JSON.parse(localStorage.getItem('qty'));
    let i = 0;
    let article = [];
    cart.items.forEach(element => {
      article.push({ idArticle : element.id, qty : qty.qty[i]});
      i ++;
    });
    
    let Order = JSON.stringify({
    lastname : `${client.lastname}`,
    firstname : `${client.firstname}`,
    address : `${client.address1}`,
    postalCode : `${client.postalcode}`, 
    city: `${client.city}`,
    phone: `${client.phone}`, 
    email: `${client.email}`,
    articles : article,
    shipdate : new Date(),
		status : 1,
    total : total,
    store : parseInt(shop.boutique)
    });

    return this.http.post<Order>(apiUrl, Order, httpOptions);
  }
}
