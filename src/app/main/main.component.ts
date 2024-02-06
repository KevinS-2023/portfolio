import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LandingpageComponent } from '../landing-page/landing-page.component';
import { WorkTogetherComponent } from '../work-together/work-together.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, LandingpageComponent, WorkTogetherComponent, SkillsComponent, ProjectListComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
