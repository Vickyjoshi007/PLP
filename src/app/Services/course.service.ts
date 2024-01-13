import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url = 'https://localhost:7141/api/CourseManagement/';

  constructor(private http: HttpClient) {}
  courseList: Course[];

  GetInstructor() {
    return this.http.get<any[]>(
      `${'https://localhost:7141/api/Instructor/'}GetInstructor`
    );
  }

  SaveCourse(course: FormData) {
    return this.http.post<Course>(`${this.url}CreateCourse`, course);
  }

  getCourses(name: string) {
    return this.http.get<Course[]>(`${this.url}GetCourseByInstructorId/${name}`);
  }


}
