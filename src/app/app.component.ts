import { Component, HostListener, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppModule } from './app.module';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AppModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kevin Schmidt';
  
  isMenuOpen: boolean = false;

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string | undefined = translate.getBrowserLang();
if (browserLang !== undefined) {
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
} else {
    // Behandle den Fall, wenn die Browser-Sprache nicht erkannt wird
    translate.use('en'); // Setze die Standardsprache auf Englisch
}
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isMenuOpen) {
      window.scrollTo(0, 0);
    }
  }

  switchMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
