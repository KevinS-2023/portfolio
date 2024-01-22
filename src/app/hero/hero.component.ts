import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  links: string [] = [];

  constructor(){
    for(let i = 1; i < 4; i++){
      this.links.push('../../assets/img/links/link_' + i + '.png');
    }
  }

}
