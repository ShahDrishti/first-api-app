import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  userEmail : any

 // signIn!: FormGroup
  message = '';


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }


  onSubmit() {
    this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe(
      (res : any) => {
        this.message = res,
          console.log("success" + res),
          this.userEmail= this.loginForm.value.email
      },
      (err) => {
        if (err.status === 401) {
          this.message = "No User with this Email or Password Exist !"
        }
        else {
          console.log("ERROR");
          console.log(err)
          this.message = "An Error Occcured. Please Try Again Later !"

        }

      }
    )
  };
}






