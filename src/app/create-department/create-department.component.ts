import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.css'
})
export class CreateDepartmentComponent implements OnInit{
  createData!: FormGroup
  // newData: any = {
  //   id: 65,
  //   name: 'AIML',
  //   place: 'Dwarka'
  // };

  constructor( private fb:FormBuilder,private http: HttpClient ){}

  ngOnInit(): void {
    this.createData = this.fb.group({
      id: [''], // Updated FormControl creation
      name: [''],
      place: ['']
    });
   

    
      
  };

  // onSubmit(){
  //   console.log(this.createData.value)
  // };


    addData(): void{
      this.http.post('http://localhost:3000/department', this.createData.value).subscribe(
        (res) => {
          console.log(res);
        },
        (err)=>{
          console.log(err);
        }
    )
  };



}
