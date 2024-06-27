import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  @Input() isEdit: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  editUser!: FormGroup
  data: any
  editModeOn = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    
    this.editUser = this.fb.group({
      email: [''],
      password: [''],
      type: [''],
      fname: [''],
      lname: [''],
      active: [''],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let email = params.get('email');
      if (email) {
        this.editModeOn = true;
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

      } else {
        this.editModeOn = false;
      }

    });
  };

  onSubmit() {
    if (this.editModeOn) {
      this.updateUser()
    }
    else {
      this.addUser()
    }

  };


  updateUser(): void {
    this.http.put('http://localhost:3000/user/' + this.data.email, this.editUser.value).subscribe(
      (res) => {
        console.log(res);
        this.closeModal.emit();
      },
      (err) => {
        console.log(err);
      }
    )
  };


  addUser() {
    this.http.post('http://localhost:3000/user', this.editUser.value).subscribe(
      (res) => {
        console.log(res)
        this.closeModal.emit();
        this.router.navigate(['/user']);
        
      },
      (err) => {
        console.log(err);
      }
    )

  }

}
