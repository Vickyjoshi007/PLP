import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

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
  model: any = {};
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.service.isLoggedIn().subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  login() {
    this.service.login(this.model).subscribe((res) => {
      if (res) {
        alert('logged In Successful');
        this.isLoggedIn = true;
        this.router.navigateByUrl('/course');
      }
    });
  }
}
