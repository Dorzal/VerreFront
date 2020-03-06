import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  clientForm: FormGroup;
  submitted = false;

  cart : any;
  articles : Article[] = [];
  total = 0;
  qty;
  constructor(private formBuilder: FormBuilder, private articleService : ArticleService, private router : Router) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      postalcode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
  });
  this.getCart();
  this.getItems();
  this.getLocalStorage();
  
  }

  get f() { return this.clientForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.clientForm.invalid) {
        return;
    }
    this.updateLocalStorage();
    this.router.navigate(['/facturation']);
    
}

updateLocalStorage(){
  localStorage.setItem('client', JSON.stringify({
    "lastname" : this.f.lastname.value,
    "firstname" : this.f.firstname.value,
    "address1" : this.f.address1.value,
    "address2" : this.f.address2.value,
    "postalcode" : this.f.postalcode.value,
    "city" : this.f.city.value,
    "phone" : this.f.phone.value,
    "email" : this.f.email.value}))
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

getLocalStorage(){
  return this.qty = JSON.parse(localStorage.getItem('qty'));
}



}
