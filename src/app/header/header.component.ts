import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin:boolean=false;

  constructor(private userservice :UserService, private router: Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userdata => {
      if(userdata && userdata.emailVerified){
      this.isLoggedin=true;
      } else{
        this.isLoggedin=false;
      }
    });
  }
  logout(user){
    firebase.auth().signOut();
    this.userservice.destroy();
    this.router.navigate(["/login"]);
  }

}
