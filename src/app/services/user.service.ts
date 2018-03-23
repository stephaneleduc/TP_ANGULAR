import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';


interface MyUserJson {
  success: boolean,
  id: number
}

@Injectable()
export class UserService {

  private api_url: string = "http://localhost/APIS/WS_TP/";

  getUser(user : User): Observable<MyUserJson> {

    return this.http.post(this.api_url + "connected_user", user) as Observable<MyUserJson>;
  }

  constructor( private http:HttpClient) {}




}
