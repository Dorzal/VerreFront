import { Component, OnInit } from "@angular/core";
import { ArticleService } from "../services/article.service";
import Article from "../models/Article";

@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.scss"]
})
export class CatalogueComponent implements OnInit {
  page = 1;
  pageSize =8;
  public articles: Article[];
  search = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles() {
    this.articleService
      .getArticles()
      .subscribe(articleData => (this.articles = articleData));
  }


  setArticles(Article){
    this.articles = Article;
  }

  
  public getSearch(recherche) {
    this.articles = null;
    this.articleService.getSearch(recherche).subscribe(articleData => this.articles = articleData);
  }


}
