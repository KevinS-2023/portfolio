import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingpageComponent {

  paths: string [] = [];

  constructor(){
    for(let i = 1; i < 4; i++){
      this.paths.push('../../assets/img/links/link_' + i + '.png');
    }
  }

}