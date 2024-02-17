import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  startAnimation: boolean = false;

  handleFormSubmit() {
    console.log('feedback');
    this.startAnimation = true;
    setTimeout(() => {
      this.startAnimation = false;
    }, 3200)
  }

  scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
