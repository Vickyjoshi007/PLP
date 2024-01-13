import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registerService: AccountService) { }

  taskValue:string
  message:string="This is original message."

  ngOnInit() {
    this.registerService.createTask.subscribe(x=>{
      this.taskValue=x
    })
  }

}
