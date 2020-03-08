import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { AgenceService } from '../services/agence.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss']
})
export class FacturationComponent implements OnInit {

  cart : any;
  total = 0;
  client;
  Agences;
  boutiqueForm : FormGroup;
  submitted = false;
  qty;
  nbarticles = 0;

  constructor(private router : Router, private agenceService : AgenceService) { }

  ngOnInit(): void {
    this.MyAgences();
    this.getLocalStorage();
    this.getCart();
    this.getClient();
    this.calculNb();
  }

templateForm(value: any) {
  this.knowAgence(value)
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

getClient(){
  this.client = JSON.parse(localStorage.getItem('client'));
}

MyAgences(){
  this.agenceService.choiceAgence().subscribe(data => this.Agences = data)
}


knowAgence(data){
  localStorage.setItem('boutique', JSON.stringify(data));
  this.router.navigate(['/confirm']);
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

}
