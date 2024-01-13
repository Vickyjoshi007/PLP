import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public service: AccountService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}
  // model: any = {};
  // isLoggedIn: boolean = false;
  // taskvalue:string
  // @Output() childComponent=new EventEmitter<string>
  // @ViewChild(LoginComponent) loginComponent!: LoginComponent;
  // @ViewChild('titleHeader') titleHeader:ElementRef

  // // ngAfterViewInit(){
  // //   if(LoginComponent){
  // //     this.loginComponent.message
  // //   }
  // // }

  ngOnInit() {
    // this.service.isLoggedIn().subscribe((user) => {
    //   this.isLoggedIn = !!user;
    // });

  }

  // Submit(){
  //   this.service.saveTask(this.taskvalue)
  // }

  // getLogin(){
  //   debugger;
  //   console.log(this.titleHeader.nativeElement.value)

  //   if(LoginComponent){
  //    this.taskvalue= this.loginComponent.message
  //   }
  // }



  // login() {
  //   this.service.login(this.model).subscribe((res) => {
  //     if (res) {
  //       alert('logged In Successful');
  //       this.isLoggedIn = true;
  //       this.router.navigateByUrl('/course');
  //     }
  //   });
  // }
}
