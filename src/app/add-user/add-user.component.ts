import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

  createUser!: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.createUser = this.fb.group({
      email: [''], // Updated FormControl creation
      password: [''],
      type: [''],
      fname: [''],
      lname: [''],
      active: [''],
    });

  };

  addUser() {
    this.http.post('http://localhost:3000/user', this.createUser.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    )

  }

}
