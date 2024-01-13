import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { AccountService } from '../Services/account.service';
import { CourseService } from '../Services/course.service';
import { UserDto } from '../model/User';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  constructor(
    private service: AccountService,
    private courseService: CourseService
  ) {}

  courses: Course[] = []; // Initialize an empty array of courses
  user: UserDto;
  couses: Course[];
  ngOnInit() {
    this.service.isLoggedIn().subscribe((x) => {
      if (x) {
        this.user = x;
      }
    });
    this.getCourses()

  }

  getCourses() {
    this.courseService.getCourses(this.user.userName).subscribe(res=>{
      this.courses=res
    })
  }
}
