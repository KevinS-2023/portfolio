import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})

export class ProjectListComponent {

  projectJoin: Project = {
     path: '../../assets/img/projects/project_join.png',
    title: 'Join',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    gitHubLink: 'https://github.com/KevinS-2023/join',
    projectLink: 'https://kevin-s-portfolio.de/join/index.html',
    reverse: 'normal',
  };

  projectPolloLoco: Project = {
    path: '../../assets/img/projects/project_el_pollo_loco.png',
   title: 'EL Pollo Loco',
   skills: ['HTML', 'CSS', 'JavaScript'],
   description: 'Embark on a thrilling adventure in a jump, run, and throw game crafted with an object-oriented approach. Assist Pepe in his quest to discover coins and Tabasco salsa, empowering him to confront the wild hen. ',
   gitHubLink: 'https://github.com/KevinS-2023/el-pollo-loco',
   projectLink: 'https://kevin-s-portfolio.de/el-pollo-loco/layouts/index.html',
   reverse: 'reverse',
 };

projectPokedex: Project = {
  path: '../../assets/img/projects/project_pokedex.png',
 title: 'Pokedex',
 skills: ['HTML', 'CSS', 'JavaScript', 'API'],
 description: 'Built upon the PokéAPI, this simple library serves to provide and catalog Pokémon information.',
 gitHubLink: 'https://github.com/KevinS-2023/pokedex',
 projectLink: 'https://kevin-s-portfolio.de/pokedex/index.html',
 reverse: 'normal',
};

projectPortfolio: Project = {
  path: '../../assets/img/projects/project_portfolio.png',
 title: 'Portfolio',
 skills: ['HTML', 'CSS', 'TypeScript', 'Angular'],
 description: 'This website was developed to showcase my skills, experiences, and projects as a web developer. With the help of the Angular framework, I have created a user-friendly and visually appealing website that allows visitors to learn more about me and my work.',
 gitHubLink: 'https://github.com/KevinS-2023/portfolio',
 projectLink: '',
 reverse: 'reverse',
};

}
