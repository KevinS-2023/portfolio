import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent, CommonModule, TranslateModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})

export class ProjectListComponent {

  constructor(private translate: TranslateService) {}

  projects: Project[] = [
    {
      path: '../../assets/img/projects/project_join.png',
      title: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript'],
      gitHubLink: 'https://github.com/KevinS-2023/join',
      projectLink: 'https://kevin-s-portfolio.de/join/index.html',
      reverse: 'normal'
    },
    {
      path: '../../assets/img/projects/project_el_pollo_loco.png',
      title: 'EL Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      gitHubLink: 'https://github.com/KevinS-2023/el-pollo-loco',
      projectLink: 'https://kevin-s-portfolio.de/el-pollo-loco/layouts/index.html',
      reverse: 'reverse'
    },
    {
      path: '../../assets/img/projects/project_pokedex.png',
      title: 'Pokedex',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
      gitHubLink: 'https://github.com/KevinS-2023/pokedex',
      projectLink: 'https://kevin-s-portfolio.de/pokedex/index.html',
      reverse: 'normal'
    },
    {
      path: '../../assets/img/projects/project_portfolio.png',
      title: 'Portfolio',
      skills: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      gitHubLink: 'https://github.com/KevinS-2023/portfolio',
      projectLink: '',
      reverse: 'reverse'
    }
  ];

}
