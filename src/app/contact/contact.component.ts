import { Component, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  form: FormGroup;
  name = "";
  phone = "";
  email = "";
  message = "";
  isLoading = false;
  isSubmittedSuccessFully = false;
  isSubmitted = false;
  errors = [];
  contactMe() {
    this.isSubmitted = true;
    this.isLoading = true;
    const contact = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      message: this.message,
      success: true,
    };
    // this.http.post("/", contact).subscribe((res) => {
    //   this.isLoading = false;
    //   this.isSubmittedSuccessFully = true;
    //   console.log(res);
    // });

    let formData = new FormData();
    formData.append("name", contact.name);
    formData.append("phone", contact.phone);
    formData.append("email", contact.email);
    formData.append("message", contact.message);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore`
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status !== 200) {
          this.isSubmittedSuccessFully = false;
          this.errors = [
            "Something went wrong... Give a few minutes than try again!",
          ];
        } else {
          this.isSubmittedSuccessFully = true;
        }
        this.isLoading = false;
        console.log(res);
      })
      .catch((error) => {
        alert(error);
        this.isSubmittedSuccessFully = false;
        this.errors = [
          "Something went wrong... Give a few minutes than try again!",
        ];
      });
  }
  // console.log(contact);
}
