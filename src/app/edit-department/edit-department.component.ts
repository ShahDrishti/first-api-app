import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent implements OnInit {
  editData!: FormGroup
  data: any;

  constructor(private fb:FormBuilder, private http: HttpClient, private route:ActivatedRoute){}

  ngOnInit(): void 
  {
     //Step #1 Get id
    //Step #2 call get api for single record
    //Step #3: get respons and replace editdata object 
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id'  ); //#1
      this.http.get('http://localhost:3000/department/'+id).subscribe(
        (res) => {
          console.log(res);
          this.data = res;
          console.log("TEST")
          console.log(this.data[0])
          //console.log(this.data[0].id)
          this.editData= this.fb.group({  //#3
            id: this.data[0].id, 
            name: this.data[0].name,
            place: this.data[0].place
          });
        },
      )
    });
  };


  updateData(): void
  {
    this.http.put('http://localhost:3000/department/'+this.data.id, this.editData.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  };

}
