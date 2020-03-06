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
  articles : Article[] = [];
  total = 0;
  qty;

  constructor(private articleService : ArticleService, private cartService : CartService) { }

  ngOnInit(): void {
    this.getCart();
    this.getItems();
    this.getLocalStorage();
  }

  getCart() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  getItems(){
    let count = 0;
    this.cart.items.forEach(element => {
      this.articleService.getArticleById(element).subscribe(data => {this.articles.push(data); this.getTotal(data.price, this.qty.qty[count]); count ++});
    })
  }

  getTotal(price, qty){
    this.total = this.total + (price * qty);
    return this.total;
  }

  deleteItem(article){
    this.cartService.deleteItems(this.cart, this.qty, article.id);
    const index : number = this.articles.indexOf(article);
    if (index !== -1) {
      this.articles.splice(index, 1);
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
