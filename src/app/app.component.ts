import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      //we will call API here
      //this.printData();
      //this.addData();
      this.updateData();

  }
  // printData(): void{
  //   this.http.get('http://localhost:3000/department/3').subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   )
  // };
 
  // addData(): void{

  //   const newData = {
  //     id: 55,
  //     name: 'IT',
  //     place: 'Pune'
     
  //   };
  //   this.http.post('http://localhost:3000/department', newData).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   )

  // };
  
  updateData(): void{
    const newData = {
      name: 'MBBS',
      place: 'Lahore'
    }
    this.http.put('http://localhost:3000/department/3', newData).subscribe(
      (res) => {
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )

  }
}
