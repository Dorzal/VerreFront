import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Order from '../models/Order';
import { environment } from 'src/environments/environment';

const apiUrl = `${environment.rootUrl}/commande`

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }


  addOrder(order : Order){
    return this.http.post<Order>(apiUrl, order);
  }
}
