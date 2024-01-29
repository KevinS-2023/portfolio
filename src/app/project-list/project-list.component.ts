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
    gitHubLink: 'gitHub-Link',
    projectLink: '',
    reverse: 'normal',
  };

  projectPolloLoco: Project = {
    path: '../../assets/img/projects/project_el_pollo_loco.png',
   title: 'EL Pollo Loco',
   skills: ['HTML', 'CSS', 'JavaScript'],
   description: 'Embark on a thrilling adventure in a jump, run, and throw game crafted with an object-oriented approach. Assist Pepe in his quest to discover coins and Tabasco salsa, empowering him to confront the wild hen. ',
   gitHubLink: 'gitHub-Link',
   projectLink: '',
   reverse: 'reverse',
 };

 projectCrm: Project = {
  path: '../../assets/img/projects/project_crm.png',
 title: 'Simpel CRM',
 skills: ['HTML', 'CSS', 'JavaScript'],
 description: 'An uncomplicated Customer Relationship Management system that operates with CRUD functionality.',
 gitHubLink: 'gitHub-Link',
 projectLink: '',
 reverse: 'normal',
};

projectPokedex: Project = {
  path: '../../assets/img/projects/project_pokedex.png',
 title: 'Pokedex',
 skills: ['HTML', 'CSS', 'JavaScript', 'API'],
 description: 'Built upon the PokéAPI, this simple library serves to provide and catalog Pokémon information.',
 gitHubLink: 'gitHub-Link',
 projectLink: '',
 reverse: 'reverse',
};

projectCryptoConverter: Project = {
  path: '../../assets/img/projects/project_crypto_converter.png',
 title: 'Crypto converter',
 skills: ['Angular', 'TypeScript', 'RestAPI', 'HTML', 'CSS'],
 description: 'Simple currency converter based on a public API displaying exchange rate charts.',
 gitHubLink: 'gitHub-Link',
 projectLink: '',
 reverse: 'normal',
};

}
