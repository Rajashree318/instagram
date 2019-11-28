import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr: ToastrService, private router :Router) { }

  
  submit(form: NgForm){
  let email=form.value.email;
  let fullname=form.value.fullname;
  let username=form.value.username;
  let password=form.value.password;
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(userdata => {
    console.log(userdata);
    userdata.user.sendEmailVerification();
    const message =`notification email has been sent to ${email}address please verify email`;
    this.toastr.success(message);
    //how to add database through firebase
    firebase.database().ref("/user" + userdata.user.uid)
    .set({
      uid: userdata.user.uid,
      email,
      password,
      fullname,
      username,
      registrationDate: new Date().toString()
    });
    this.router.navigate(["/login"]);
    

  })
  .catch(err => {
    this.toastr.error(err.message);
    console.log(err);
  });
 

}
ngOnInit() {
}
}
