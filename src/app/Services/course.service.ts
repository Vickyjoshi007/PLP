import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url = 'https://localhost:7141/api/CourseManagement/';

  constructor(private http: HttpClient) {}


  GetInstructor(){
    return this.http.get<any[]>(`${'https://localhost:7141/api/Instructor/'}GetInstructor`);
  }

  SaveCourse(course: FormData) {
    // const headers=new HttpHeaders({
    //   'Content-Type':'multipart/form-data'
    // })
    return this.http.post<Course>(`${this.url}CreateCourse`, course);
  }
}
