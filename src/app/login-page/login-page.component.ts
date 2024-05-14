import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  loginForm!:FormGroup


  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router){}

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email:[''],
      password:['']
    });
  }

  onSubmit(){

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.http.post('http://localhost:3000/login', { email, password }).subscribe(
      (res) => {
        console.log(res)
       
      },
      (err) => {
        console.log(err)
        }
    )};

}
