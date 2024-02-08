import { Component, Input } from '@angular/core';
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
  
}
