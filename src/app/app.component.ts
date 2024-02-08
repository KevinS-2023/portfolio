import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landing-page/landing-page.component';
import { WorkTogetherComponent } from './work-together/work-together.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LandingpageComponent,
    WorkTogetherComponent,
    SkillsComponent,
    ProjectListComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kevin Schmidt';
  
  isMenuOpen: boolean = false;

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
