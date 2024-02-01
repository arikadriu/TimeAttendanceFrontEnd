import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from '../enviroments/enviromets';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from '../user-details/user-details.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = environment.apiUrl;
    newMemberModalRef!: NgbModalRef;
    


constructor( private httpClient: HttpClient, private modService:NgbModal){

}    

getUsers(): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}User/users`).pipe();
  }

  
  getTasks(user:any): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}Tasks/user/${user}`).pipe();
  }  

  getLoginRecords(user: any): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}LoginRecord/user/${user}`).pipe();
  }  

  createNewPersonModal(data: any): void {
    this.newMemberModalRef = this.modService.open(UserDetailsComponent, {centered: true, animation: true});
    this.newMemberModalRef.componentInstance.data = data;
  }  


  closeNewPersonModal(){
    this.newMemberModalRef.close();
  }
  

}