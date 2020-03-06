import { Component, OnInit } from '@angular/core';
import Article from '../models/Article';
import { ArticleService } from '../services/article.service';
import { AgenceService } from '../services/agence.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  boutiqueForm : FormGroup;
  submitted = false;
  qty;
  nbarticles = 0;

  constructor(private router : Router,private formBuilder: FormBuilder, private articleService : ArticleService, private agenceService : AgenceService) { }

  ngOnInit(): void {
    this.boutiqueForm = this.formBuilder.group({
      boutique:  Number 
    });

    this.getCart();
    this.getItems();
    this.getClient();
    this.MyAgences();
    this.getLocalStorage();
    this.calculNb();
  }

  get f() { return this.boutiqueForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.boutiqueForm.invalid) {
      console.log('ici');
        return;
    }
    console.log(this.f.boutique.value);
    this.knowAgence(this.f.boutique.value);
    this.router.navigate(['/facturation']);
    
}

  
getCart() {
  this.cart = JSON.parse(localStorage.getItem('cart'));
}

getItems(){
  let count = 0;
  this.cart.items.forEach(element => {
    this.articleService.getArticleById(element).subscribe(data => {this.articles.push(data); this.getTotal(data.price, this.qty.qty[count]); count ++; });
  })
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
  localStorage.setItem('boutique', data);
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
