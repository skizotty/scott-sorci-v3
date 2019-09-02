import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  form: FormGroup;
  name = '';
  phone = '';
  email = '';
  message = '';
  isLoading = false;
  isSubmittedSuccessFully = false;
  isSubmitted = false;
  contactMe() {
    this.isSubmitted = true;
    this.isLoading = true;
    const contact = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      message: this.message,
      success: true
    };
    this.http
      .post('http://scottsorci.com/form_endpoint.php', contact)
      .subscribe(res => {
        this.isLoading = false;
        this.isSubmittedSuccessFully = true;
        console.log(res);
      });
    // console.log(contact);
  }
}
