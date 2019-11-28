import { Component, OnInit } from '@angular/core';
import {NgForm} from  '@angular/forms';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { MyfireService } from '../services/myfire.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, 
    private myfire : MyfireService,
     private userservice :UserService,
      private router: Router) { }
  
  ngOnInit() {
  }
  submit(form: NgForm){
    let email=form.value.email;
 
    let password=form.value.password;

    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then(userdata => {
      if(userdata.user.emailVerified){
        this.myfire
        .getDataFromDatabase(userdata.user.uid)
        .then(userDataFromDatabase => {
          this.userservice.set(userDataFromDatabase);
          const message=`${email}has been successfully verified`;
        // this.toastr.success(message);
        // this.router.navigate(["/addimages"]);
        })
        .catch(err => console.log(err))


      }else{
        const message =` ${email} notification email has been sent toaddress please verify email`;
      this.toastr.success(message);
      firebase.auth().signOut();   

      }
      
      
  })
  .catch(err =>{
    this.toastr.error(err.message);
  })
  

}

  }
