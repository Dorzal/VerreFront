import { Component, OnInit } from '@angular/core';
import Article from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss']
})
export class FacturationComponent implements OnInit {

  cart : any;
  articles : Article[] = [];
  total = 0;
  client;
  
  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getCart();
    this.getItems();
    this.getClient();
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

getClient(){
  this.client = JSON.parse(localStorage.getItem('client'));
}

}
