import { Component,OnInit } from '@angular/core';
import *  as firebase  from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'udemyangular';

  ngOnInit(){
     // Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCsTCTs6mLKIAvej0Oq1E48wYpNflELA-I",
  authDomain: "fullstack-instagram-project.firebaseapp.com",
  databaseURL: "https://fullstack-instagram-project.firebaseio.com",
  projectId: "fullstack-instagram-project",
  storageBucket: "fullstack-instagram-project.appspot.com",
  messagingSenderId: "169454233055",
  appId: "1:169454233055:web:5edeebc2b7a17d643c906a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  }
}
