import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../interfaces/project.interface'

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() childData!: Project;
  
}
