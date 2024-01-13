import { Component, OnInit, } from '@angular/core';
import { DatePipe} from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseForm: FormGroup;
  InstrcutorList: any[];
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private datePipe:DatePipe
  ) {}

  ngOnInit() {
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

    this.getInstructor();
  }

  OnSelectedFileChange(event:any){
    this.courseForm.get('File')?.setValue(event.target.files[0])
  }

  getInstructor() {
    this.courseService.GetInstructor().subscribe((res) => {
      this.InstrcutorList = res;
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {

      this.courseForm.get('uploadDate')?.setValue(this.datePipe.transform
      (this.courseForm.get('uploadDate')?.value,'yyyy-MM-ddTHH:mm:ss'));

      const formData = new FormData();
      Object.keys(this.courseForm.controls).forEach((key) => {
        const control = this.courseForm.get(key);
        if (control instanceof FormControl) {
          formData.append(key, control.value);
        }
      });

      this.courseService.SaveCourse(formData).subscribe(res=>{
        if(res.status=='success')
        {
          alert('Course Created Successfully');
        }
      })
    }
  }
}
