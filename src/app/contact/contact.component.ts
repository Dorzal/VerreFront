import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  ContactForm: FormGroup;
  public data: any = [];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ContactForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
  }

  save(name, mail, subject, message): void {
    if (this.ContactForm.invalid) {
      return;
    }

    this.data["name"] = name;
    this.data["mail"] = mail;
    this.data["subject"] = subject;
    this.data["message"] = message;
    console.log(this.data);
    //add request to send email or into mysql
    this.http.put<any>("", this.data).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occurred.");
        }
      }
    );
  }
}
