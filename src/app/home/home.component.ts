import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'home page';
  courses = [
    {
      id: 1,
      title: 'Angular',
    },
    {
      id: 2,
      title: 'React',
    },
    {
      id: 3,
      title: 'Vue',
    },
    {
      id: 4,
      title: 'PHP',
    },
    {
      id: 5,
      title: 'Laravel',
    },
    {
      id: 6,
      title: 'Flutter',
    },
    {
      id: 7,
      title: 'Android',
    },
    {
      id: 8,
      title: 'IOS',
    },
    {
      id: 9,
      title: 'Python',
    },
    {
      id: 10,
      title: 'Node',
    },
    {
      id: 3,
      title: 'Vue',
    },
    {
      id: 4,
      title: 'PHP',
    },
    {
      id: 5,
      title: 'Laravel',
    },
    {
      id: 6,
      title: 'Flutter',
    },
    {
      id: 7,
      title: 'Android',
    },
    {
      id: 8,
      title: 'IOS',
    },
    {
      id: 9,
      title: 'Python',
    },
    {
      id: 10,
      title: 'Node',
    },
  ];

  onBtnClick(): void {
    alert('Hello');
  }

  onKeyUp(title: string): void {
    this.title = title;
  }

  onCourseClicked(title: string) {
    console.log(title);
  }
}
