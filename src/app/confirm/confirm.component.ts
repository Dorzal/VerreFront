import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  client;
  cart : any;
  total = 0;
  qty;
  nbarticles = 0;
  random : Article[];
  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getClient();
    this.getLocalStorage();
    this.getCart();
    this.calculNb();
    this.getRandom();
  }

  getClient(){
    this.client = JSON.parse(localStorage.getItem('client'));
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
  getLocalStorage(){
    return this.qty = JSON.parse(localStorage.getItem('qty'));
  }

  calculNb(){
    this.qty.qty.forEach(element => {
      this.nbarticles += element;
    })
    return this.nbarticles;
     
  }

  getRandom() {
    this.articleService.getRandomArticle().subscribe(data =>this.random = data);
  }

}
