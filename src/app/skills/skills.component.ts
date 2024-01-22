import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills: string [] = [];

  constructor(){
    for(let i = 1; i < 11; i++){
     this.skills.push('../../assets/img/skills/skill_' + i + '.png');
    }
  }

}
