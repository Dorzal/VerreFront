import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article : Article;
  random : Article[];

  constructor(private articleService : ArticleService, private route: ActivatedRoute, private cartService : CartService) { }

  ngOnInit(): void {
    this.getArticleById();
    this.getRandom();
  }

  getArticleById() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(id).subscribe(data => this.article = data);
  }

  getRandom() {
    this.articleService.getRandomArticle().subscribe(data =>this.random = data);
  }

  addItem(articleId) {
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    if(!cartItem){
      localStorage.setItem('cart', JSON.stringify({'items' : [articleId]}))
    }else {
      this.cartService.addCart(cartItem.items, articleId);
    }
  }

}
