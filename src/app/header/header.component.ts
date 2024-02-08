import { Component, Output, EventEmitter, Injector, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{

  animate: boolean = false;
  containerPosition: string = 'translateX(0)';
  containerVisible: boolean = false;
  private appComponent: AppComponent;
  currentLanguage: string = 'de';
  
  constructor(private injector: Injector, private translate: TranslateService) {
    this.appComponent = this.injector.get(AppComponent);
  }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
  }

  switchLanguage(event: any) {
    const language = event.target?.value;
    if (language) {
      this.translate.use(language);
      this.currentLanguage = language;
    }
  }

  switchMenu(){
    this.containerPosition = this.containerPosition === 'translateX(-100vw)' ? 'translateX(0)' : 'translateX(-100vw)';
    this.appComponent.switchMenu();
    setTimeout(() => {
      this.animate = !this.animate;
      this.containerVisible = !this.containerVisible;
    }, 1000)
  }

  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu() {
    this.menuToggled.emit(true);
  }
}

