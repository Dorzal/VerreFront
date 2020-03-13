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
  submitted = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ContactForm = this.formBuilder.group({
      name: ['',Validators.required],
      mail: ['',Validators.required],
      subject: ['',Validators.required],
      message: ['',Validators.required]
    });
  }

  get f() { return this.ContactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ContactForm.invalid) {
        return;
    }
  }

}
