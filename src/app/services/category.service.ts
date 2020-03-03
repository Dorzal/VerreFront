import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Category from '../models/Category';
import { environment } from 'src/environments/environment';
import Article from '../models/Article';

const apiUrl = `${environment.rootUrl}/catalogue/category`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(apiUrl);
  }

  getArticlesbyCategory(id:number): Observable<Article[]> {
    let url = `${apiUrl}/${id}/article`;
    return this.http.get<Article[]>(url);
  }
}
