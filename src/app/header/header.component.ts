import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  animate: boolean = false;
  containerPosition: string = 'translateX(0)';

  switchMenu(){
    this.containerPosition = this.containerPosition === 'translateX(-100vw)' ? 'translateX(0)' : 'translateX(-100vw)';
    setTimeout(() => {
      this.animate = !this.animate;
    }, 1000)
    
  }
}
