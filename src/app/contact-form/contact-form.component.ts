import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  mailTest = true;
  http = inject(HttpClient);
  checkbox: boolean = false;

  contactData = {
    name: '',
    mail: '',
    message: ''
  };

  post = {
    endPoint: 'https://kevin-s-portfolio.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.checkbox = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
      this.checkbox = false;
    }
  }

}


