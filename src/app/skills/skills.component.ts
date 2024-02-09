import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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

  skillsImg: string[] = [];
  skillsName: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Scrum', 'Firebase', 'GIT', 'CSS', 'Rest-API', 'Material design'];
  isVisible: boolean = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    for (let i = 1; i < 11; i++) {
      this.skillsImg.push('../../assets/img/skills/skill_' + i + '.svg');
    }
  }

  //animation 
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
      RECT.top + 400 <= (window.innerHeight || document.documentElement.clientHeight) &&
      RECT.bottom >= 100 
    );
  }


}
