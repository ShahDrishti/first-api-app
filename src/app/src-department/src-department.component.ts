import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-src-department',
  templateUrl: './src-department.component.html',
  styleUrl: './src-department.component.css'
})
export class SrcDepartmentComponent implements OnInit {
  searchForm!: FormGroup;
  data: any;
  constructor(private http: HttpClient, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.searchForm = this.fb.group({
      id: [''],
      name: [''],
      place: ['']
    })
  }

  onSubmit() {
    const { id, name, place } = this.searchForm.value
    if (id || name || place) {
      this.http.post('http://localhost:3000/query', this.searchForm.value).subscribe(
        (res) => {
          this.data = res
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      )

    }
    else {
      alert("Please enter at least one field")
    }


  }
}
