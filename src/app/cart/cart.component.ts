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

  constructor(private articleService : ArticleService, private cartService : CartService) { }

  ngOnInit(): void {
    this.getCart();
    this.getItems();
  }

  getCart() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  getItems(){
    this.cart.items.forEach(element => {
      this.articleService.getArticleById(element).subscribe(data => {this.articles.push(data); this.getTotal(data.price)});
    })
  }

  getTotal(price){
    this.total = this.total + price;
    return this.total;
  }

  deleteItem(article){
    this.cartService.deleteItems(this.cart, article.id);
    const index : number = this.articles.indexOf(article);
    if (index !== -1) {
      this.articles.splice(index, 1);
      this.total = this.total - article
    }
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

}
