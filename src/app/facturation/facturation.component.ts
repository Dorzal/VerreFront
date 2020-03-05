import { Component, OnInit } from '@angular/core';
import Article from '../models/Article';
import { ArticleService } from '../services/article.service';
import { AgenceService } from '../services/agence.service';

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
  Agences;
  
  constructor(private articleService : ArticleService, private agenceService : AgenceService) { }

  ngOnInit(): void {
    this.getCart();
    this.getItems();
    this.getClient();
    this.MyAgences();
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

MyAgences(){
  this.agenceService.choiceAgence().subscribe(data => this.Agences = data)
}

}
