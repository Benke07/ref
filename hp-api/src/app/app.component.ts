import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hp-api';
  logged: any;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.logged = localStorage.getItem('logged');
  }

  onLogOut(){
    localStorage.removeItem('logged');
    this.router.navigate(['login-component/']);
  }

}

