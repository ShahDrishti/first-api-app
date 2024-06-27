import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {

  isModalVisible : boolean = false;

  constructor(private http: HttpClient) {

  }
  user: any;
  selectedUsers: any[] = [];
  totalRecords: any;
  recordsPerPage: number = 2; // Set your desired items per page
  totalPages: any;
  pages: number [] = [];

  ngOnInit(): void {
    this.showUser();
    this.totalRowsCount();
  }

  showUser() {
    this.http.get('http://localhost:3000/user').subscribe(
      (res) => {
        this.user = res
        console.log(res);
        //this.totalRowsCount()
      },
      (err) => {
        console.log(err);
      }

    )

  };

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.showUser()
    //this.totalRowsCount()
  }

  totalRowsCount() {
    this.http.get('http://localhost:3000/total-rows').subscribe(
      (res) => {
        this.totalRecords = res
        console.log('Row Count : ' + res);
        console.log(this.totalRecords)
        this.calculatePages();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage)
    console.log('Total Pages :' + this.totalPages)
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i)
    }
    console.log(this.pages)
  }



  deleteUser(email: any): void {

    if (confirm('Are you sure you want to delete this User?')) {
      this.http.delete('http://localhost:3000/user/' + email).subscribe(
        (res) => {
          this.showUser();
          //this.totalRowsCount()
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  sortColumn(columnName: string): void {

    console.log('Column clicked:', columnName);
    this.http.post('http://localhost:3000/sort-column', { columnName }).subscribe(
      (res) => {
        this.user = res
        console.log('Column name sent ', res);

      },
      (err) => {
        console.log('Column not sent to backend');

      }
    )

  }

  toggleSelection(user: any, event: any): void {
    const isChecked = event.target.checked
    console.log('User:', user.email, 'is checked:', isChecked);
    if (isChecked) {
      this.selectedUsers.push(user);
      console.log(this.selectedUsers)
    }
    else {
      const index = this.selectedUsers.findIndex(selectedUser => selectedUser.email === user.email);
      console.log(index)
      if (index !== -1) {
        this.selectedUsers.splice(index, 1);
        console.log(this.selectedUsers)
      }
    }
    //Sent the selected users to Backend 
    // this.http.post('http://localhost:3000/selected-users',{selectedUsers: this.selectedUsers}).subscribe(
    //   (res)=>{
    //     console.log('Selected Users sent')

    //   },
    //   (err)=>{
    //     console.log('Selected users not sent ')

    //   }

    // )



  }
  deleteSelectedUsers() {
    if (confirm('Are you sure you want to delete selected users?')) {
      this.http.post('http://localhost:3000/selected-users', { selectedUsers: this.selectedUsers }).subscribe(
        (res) => {
          this.showUser();
        },
        (err) => {
          console.log(err)
        }
      );
    }

  }

  onCheckboxChange(event: any) {
    const isChecked = event.target.checked;
    console.log('Checkbox is checked:', isChecked);

  }

  pageSelected(pageNum: number) {
    console.log('Page Demanded : ' + pageNum)
    this.http.get<any[]>(`http://localhost:3000/users?page= ${pageNum}`).subscribe(
      (res) => {
        console.log('Page Number sent')
        this.user = res

      },
      (err) => {
        console.log('Error in Sending PageNumber')

      }
    )

  }

}
