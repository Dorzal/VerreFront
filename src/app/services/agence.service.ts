import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import Agence from '../models/Agence';

const apiUrl = `${environment.rootUrl}/localisation`;

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http : HttpClient) { }

  getAgences() {
    return this.http.get(apiUrl);
  }

  choiceAgence() {
    let data = JSON.parse(localStorage.getItem('client'));
    let adresse = data.address1.replace(/ /g, '-');
    let url = `${apiUrl}/adresse/${adresse}/ville/${data.city}`;
    return this.http.get(url);
  }
}
