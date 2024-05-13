import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {

  user: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.showUser();
  }

  showUser() {
    this.http.get('http://localhost:3000/user').subscribe(
      (res) => {
        this.user = res
        console.log(res);
      },
      (err) => {
        console.log(err);
      }

    )

  };

  deleteUser(email: any ): void {

    if (confirm('Are you sure you want to delete this User?')) {
      this.http.delete('http://localhost:3000/user/' + email).subscribe(
        (res) => {
          // After deletion, refresh data
          console.log("before refresh")
          this.showUser();
          console.log("after refresh")
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
