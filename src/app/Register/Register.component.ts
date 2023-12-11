import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DatePipe } from '@angular/common';
import { UserDto } from '../model/User';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  // dropdownSettings: IDropdownSettings = {};
  role:any = [];
  dropdownSettings:any = {};
  selectedFile:File;
  UserDto:UserDto

  ngOnInit() {

    this.role = [
      { item_id: 1, item_text: 'Admin' },
      { item_id: 2, item_text: 'Student' },
      { item_id: 3, item_text: 'Instructor' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  constructor(
    private fb: FormBuilder,
    private registerService: AccountService,
    private datePipe: DatePipe
  ) {
    this.registerForm = fb.group({
      credential: this.fb.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        city: ['', Validators.required],
        pinCode: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      additionalInfo: this.fb.group({
        role: ['', Validators.required],
        photo: ['', Validators.required],
      }),
    });
  }


  onSelectedFile(event:any)
  {
    this.selectedFile = event.target.files[0];
  }
  // onSelectedFile(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   this.registerForm.patchValue({
  //     photo: this.selectedFile
  //   });
  // }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      let formattedDate=this.datePipe.
   transform(this.registerForm.value.personalInfo.dateOfBirth,'yyyy-MM-ddTHH:mm:ss');


      const registerFormValue = this.registerForm.value;
      let roles=this.registerForm.value.additionalInfo.role.map((role:any)=>role.item_text)

      let formData=new FormData();
      // Append credential fields
      formData.append('Credential.UserName', registerFormValue.credential.userName);
      formData.append('Credential.Password', registerFormValue.credential.password);
      formData.append('Credential.Email', registerFormValue.credential.email);

      //Append personalInfo fields
      formData.append('PersonalInfo.FirstName', registerFormValue.personalInfo.firstName);
      formData.append('PersonalInfo.LastName', registerFormValue.personalInfo.lastName);
      formData.append('PersonalInfo.City', registerFormValue.personalInfo.city);
      formData.append('PersonalInfo.PinCode', registerFormValue.personalInfo.pinCode);
      formData.append('PersonalInfo.DateOfBirth', formattedDate!);
      formData.append('PersonalInfo.Gender', registerFormValue.personalInfo.gender);

      // Append AdditionalInfo fields
      this.registerForm.value.additionalInfo.role=roles;
      formData.append('AdditionalInfo.Role', roles);
      formData.append('AdditionalInfo.Photo',this.selectedFile);
      this.registerService.registerUser(formData).subscribe(data=>{
        if(data)
        {
          alert("User REgistered Successfully!!!")
        }
      });
    }
  }
}
