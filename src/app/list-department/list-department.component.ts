import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrl: './list-department.component.css'
})
export class ListDepartmentComponent implements OnInit{

  data: any;
  constructor( private http: HttpClient){}

  ngOnInit(): void {
  this.printData();
      
  };

  printData(): void{
    this.http.get('http://localhost:3000/department').subscribe(
      (res) => {
        this.data =res
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }

    )
  };





}
