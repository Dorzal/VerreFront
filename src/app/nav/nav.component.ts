import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import Category from '../models/Category';
import { ArticleService } from '../services/article.service';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  title = 'VerreTech';
  categories : Category[] ;
  constructor(private categoryService: CategoryService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data => this.categories = data );
  }



  

}
