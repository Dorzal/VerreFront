import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import Category from '../models/Category';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'VerreTech';
  categories : Category[] ;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data => this.categories = data );
  }


  

}
