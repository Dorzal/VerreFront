import { Component, OnInit } from '@angular/core';
import { AgenceService } from '../services/agence.service';
import Agence from '../models/Agence';

@Component({
  selector: 'app-point-relais',
  templateUrl: './point-relais.component.html',
  styleUrls: ['./point-relais.component.scss']
})
export class PointRelaisComponent implements OnInit {

  agences : Agence[];
  constructor(private agenceService : AgenceService) { }

  ngOnInit(): void {
    this.getAgences();
  }

  getAgences(){
    this.agenceService.getAgences().subscribe(data => {
      this.agences = data
    })
  }

}
