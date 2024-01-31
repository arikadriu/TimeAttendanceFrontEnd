import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
 users: any[] = [];
 
  constructor(private userService : UserService){

  }


  ngOnInit(){
    this.getUsers();
    console.log(this.users);
    
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
      (data) => {
        console.log('data:', data);
        this.users = data;
        console.log('Users:', this.users);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


}
