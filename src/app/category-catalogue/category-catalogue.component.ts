import { Component, OnInit } from '@angular/core';
import Article from '../models/Article';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-catalogue',
  templateUrl: './category-catalogue.component.html',
  styleUrls: ['./category-catalogue.component.scss']
})
export class CategoryCatalogueComponent implements OnInit {
  articles : Article[];
  constructor(private categoryService : CategoryService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoryArticles();
  }

  public getCategoryArticles(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getArticlesbyCategory(id).subscribe(articleData => this.articles = articleData);
  }

}
