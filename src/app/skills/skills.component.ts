import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillsImg: string [] = [];
  skillsName: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Scrum', 'Firebase', 'GIT', 'CSS', 'Rest-API', 'Material design'];

  constructor(){
    for(let i = 1; i < 11; i++){
     this.skillsImg.push('../../assets/img/skills/skill_' + i + '.svg');
    }
  }

}
