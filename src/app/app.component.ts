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
      this.printData();

  }
  printData(): void{
    this.http.get('http://localhost:3000/department/3').subscribe(
      (res) => {
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
