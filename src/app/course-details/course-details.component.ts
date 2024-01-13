import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}
  courseForm: FormGroup;
  InstrcutorList: any[];
  ngOnInit() {
    this.getInstructor();
    this.courseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      instructorId: ['', Validators.required],
      description: ['', Validators.required],
      isActive: ['', Validators.required],
      courseId: [''],
      uploadDate: [''],
      materialName: [''],
      File: [''],
    });
  }
  getInstructor() {
    this.courseService.GetInstructor().subscribe((res) => {
      this.InstrcutorList = res;
    });
  }

  OnSelectedFileChange(event:any){
    this.courseForm.get('File')?.setValue(event.target.files[0])
  }


  updateCourse() {

    }

}


