import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title: string = 'home page'
  courses = [{
    id: 1,
    title: 'Angular'
  },
  {
    id: 2,
    title: 'React'
  },
  {
    id: 3,
    title: 'Vue'
  },
  {
    id: 4,
    title: 'PHP'
  }]

  onBtnClick(): void {
    alert("Hello")
  }

  onKeyUp(title: string): void {
    this.title = title
  }

  onCourseClicked(title: string) {
    console.log(title)
  }
}
