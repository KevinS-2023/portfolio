import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  sendMail(){
    console.log('mail gesendet');
  }

}


