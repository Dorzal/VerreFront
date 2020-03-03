import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  articles : Article[];

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles(){
    this.articleService.getArticles().subscribe(articleData => this.articles = articleData);
  }

}
