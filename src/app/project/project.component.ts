import { Component } from '@angular/core';
import { Project } from '../interfaces/project.interface'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  path: string = "../../assets/img/projects/project_join.png";
  title: string = "Join";
  skills: string [] = ['HTML', 'CSS', 'JavaScript'];
  description: string = "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.";
  gitHubLink: string = "";
  htmlLink: string = "";


  projects = [{
    path: '../../assets/img/projects/project_join',
    title: 'Join',
    skills: ['HTML', 'CSS', 'JavaScript'],
    text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    link: 'gitHub-Link',
  },
  {
    path: '../../assets/img/projects/project_el_pollo_loco',
    title: 'El Pollo Loco',
    skills: ['HTML', 'CSS', 'JavaScript'],
    text: 'Embark on an adventurous game with Pepe, where he jumps, runs, and throws objects using an object-oriented approach. Help Pepe discover coins and collect Tabasco salsa to confront the wild hen.',
    link: 'gitHub-Link',
  },
  {
    path: '../../assets/img/projects/project_el_pollo_loco',
    title: 'El Pollo Loco',
    skills: ['HTML', 'CSS', 'JavaScript'],
    text: 'Embark on an adventurous game with Pepe, where he jumps, runs, and throws objects using an object-oriented approach. Help Pepe discover coins and collect Tabasco salsa to confront the wild hen.',
    link: 'gitHub-Link',
  },
]
}
