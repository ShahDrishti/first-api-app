import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {


  emailDisabled: boolean = true;
  editUser!: FormGroup
  data: any

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let email = params.get('email');
      this.http.get('http://localhost:3000/user/' + email).subscribe(
        (res) => {
          console.log(res);
          this.data = res;
          this.editUser = this.fb.group({
            email: this.data.email,
            password: this.data.password,
            type: this.data.type,
            fname: this.data.fname,
            lname: this.data.lname,
            active: this.data.active
          });
        },
      )
    });
  };


  updateUser(): void {
    this.http.put('http://localhost:3000/user/' + this.data.email, this.editUser.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/user'])
      },
      (err) => {
        console.log(err);
      }
    )
  };

}
