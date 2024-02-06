import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() backColor: boolean = false;

  animate: boolean = false;
  containerPosition: string = 'translateX(0)';
  containerVisible: boolean = false;
  constructor(private appComponent: AppComponent) {}

  switchMenu(){
    this.containerPosition = this.containerPosition === 'translateX(-100vw)' ? 'translateX(0)' : 'translateX(-100vw)';
    this.appComponent.switchMenu();
    setTimeout(() => {
      this.animate = !this.animate;
      this.containerVisible = !this.containerVisible;
    }, 1000)
  }

  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu() {
    this.menuToggled.emit(true);
  }
}
