import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  sendMail(){
    console.log('mail gesendet');
  }

}


