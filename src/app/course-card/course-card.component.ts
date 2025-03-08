import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input({ required: true }) course: {
    id: number;
    title: string
  };

  @Output() viewCourseEvent = new EventEmitter<string>()


  constructor(private router: Router) {

  }
  viewCourse(): void {
    console.log('hello')
    this.router.navigate([`course-details/${this.course.id}`])
    this.viewCourseEvent.emit(this.course.title)
  }
}
