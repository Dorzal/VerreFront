import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import Article from '../models/Article';

const apiUrl = `${environment.rootUrl}/catalogue`;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(apiUrl);
  }

  getArticleById(id : number): Observable<Article> {
    let url = `${apiUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  getRandomArticle(): Observable<Article[]> {
    let url = `${apiUrl}/randomarticle`
    return this.http.get<Article[]>(url);
  }

  getSearch(recherche): Observable<Article[]>{
    let url = `${apiUrl}/search?search=${recherche}`;
    return this.http.get<Article[]>(url);
  }
}
