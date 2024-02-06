import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Links } from '../interfaces/project.interface';
import { WorkTogetherComponent } from '../work-together/work-together.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, WorkTogetherComponent, SkillsComponent, ProjectListComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingpageComponent {

  readonly links: Links[] = [
    { imgPath: '../../assets/img/links/github_green.png', link: 'https://github.com/KevinS-2023' },
    { imgPath: '../../assets/img/links/email_green.png', link: 'mailto:kevin.schmidt.1990@web.de' },
    { imgPath: '../../assets/img/links/linkedin_green.png', link: 'https://www.linkedin.com/in/kevin-schmidt-a571172aa/' }
];

  constructor(){
    
  }

}
