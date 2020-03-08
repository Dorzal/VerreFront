import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : any;
  total = 0;
  qty;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.getLocalStorage();
    this.getCart();
  }

  getCart() {
    let count = 0;
    this.cart = JSON.parse(localStorage.getItem('cart'));
    
    this.cart.items.forEach(element => {
      this.qty.qty[count];
      this.getTotal(element.price, this.qty.qty[count]); 
      count ++
    });
    
  }

  getTotal(price, qty){
    this.total = this.total + (price * qty);
    return this.total;
  }

  deleteItem(article){
    this.cartService.deleteItems(this.cart, this.qty, article);
    const index : number = this.cart.items.indexOf(article);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
      this.total = this.total - article
    }
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  getLocalStorage(){
    return this.qty = JSON.parse(localStorage.getItem('qty'));
  }


}
