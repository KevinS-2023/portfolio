import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Links } from '../interfaces/project.interface';
import { WorkTogetherComponent } from '../work-together/work-together.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, WorkTogetherComponent, SkillsComponent, ProjectListComponent, ContactComponent, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingpageComponent {

  readonly links: Links[] = [
    { imgPath: '../../assets/img/links/github_green.svg', link: 'https://github.com/KevinS-2023' },
    { imgPath: '../../assets/img/links/email_green.svg', link: 'mailto:kevin.schmidt.1990@web.de' },
    { imgPath: '../../assets/img/links/linkedin_green.svg', link: 'https://www.linkedin.com/in/kevin-schmidt-a571172aa/' }
];

  constructor(){
    
  }

}
