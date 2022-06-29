import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pageTitle = 'Welcome to registration page';
  name = 'Welcome Arijit';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  showData($event: any)
  {
    if($event)
    {
      console.log('Button was clicked');
      console.log($event)
    }
  }

  redirectToRegistration($event: any)
  {
    if($event)
    {
      this.router.navigate(['/register']);
    }
  }
}
