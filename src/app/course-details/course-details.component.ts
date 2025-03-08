import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  @Input() id: string = ''
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.snapshot.params['id']
    this.activatedRoute.snapshot.paramMap.get('id')
    this.activatedRoute.params.subscribe((res) => {
      console.log(res['id'])
    })

    console.log(this.id)

  }
}
