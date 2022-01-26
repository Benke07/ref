import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ID = new FormControl('', Validators.required);
  Pass = new FormControl('', Validators.required);

  ngOnInit(): void {
  }

  onCheck(): void{
    if (this.ID.value === 'admin' && this.Pass.value === 'admin') {
      localStorage.setItem('logged', '1');
      this.router.navigate(['listing-component/']);
    }
  }

}
