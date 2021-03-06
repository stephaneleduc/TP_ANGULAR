import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { AppComponent } from '../app.component';
import { Authentication } from '../providers/authentication';
import { Router } from '@angular/router';
import { MyeventService } from '../services/myevent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  providers: [UserService]
})
export class HomeComponent implements OnInit {

  private current_user: User = User.empty();

  constructor( private userservice: UserService, 
               private authentication: Authentication,
               ) { }

  ngOnInit() {

  }


  connect() {
    
    if (!this.current_user.getUsername() || !this.current_user.getPassword() ) return;

    let username = this.current_user.getUsername();
    let password = this.current_user.getPassword();


    let user = new User (username, password);

    this.userservice.getUser ( user ).subscribe(
      (datas) => {
        if (datas.success) {

          
          this.authentication.setConnected_id(datas.id);

          this.current_user.setUsername("");
          this.current_user.setPassword("");
         
        }
        
      },
      (error) => {

        console.log(error);
      }
    )
      
    
  }

}
