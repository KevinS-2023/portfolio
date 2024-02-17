import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../interfaces/project.interface'
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() childData!: Project;
  @Input() index: number = 0;
  isVisible: boolean = false;
  animationDirection: string = '';

  constructor(private elementRef: ElementRef){

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkVisibility();
  }

  checkVisibility(): void {
    const element = this.elementRef.nativeElement;
    if (this.isInViewport(element)) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  isInViewport(element: HTMLElement): boolean {
    const RECT = element.getBoundingClientRect();

    return (
      RECT.top + 300 <= (window.innerHeight || document.documentElement.clientHeight) &&
      RECT.bottom >= 100 
    );
  }

  isLargeViewport(): boolean {
    return window.innerWidth > 1050 && this.isVisible;
  }
}