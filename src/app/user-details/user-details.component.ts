import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
data: any;
tasks:any = [];
logins: any=[];

constructor(private userService: UserService){}

ngOnInit(): void {
  console.log(this.data);
  this.getTasks();
  this.getLogins();
}

getTasks(){
this.userService.getTasks(this.data.userId).subscribe(
  (data) => {
    console.log('data:', data);
    this.tasks=data;
  },
  (error) => {
    console.error('Error fetching users:', error);
  }
);
}

getLogins(){
  this.userService.getLoginRecords(this.data.userId).subscribe(
    (data) => {
      console.log('data:', data);
      this.logins=data;
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
  );
  }
  

}
