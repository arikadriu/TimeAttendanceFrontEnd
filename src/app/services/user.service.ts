import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../enviroments/enviromets';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = environment.apiUrl;
    


constructor( private httpClient: HttpClient){

}    

getUsers(): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}User/users`).pipe();
  }

  

}