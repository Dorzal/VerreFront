import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  public data: any = [];

  constructor(private http: HttpClient) {}
}
