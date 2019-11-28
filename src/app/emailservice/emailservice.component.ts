import { Component, OnInit } from '@angular/core';
import { Emailservice} from '../email.service';

@Component({
  selector: 'app-emailservice',
  templateUrl: './emailservice.component.html',
  styleUrls: ['./emailservice.component.css']
})
export class EmailserviceComponent implements OnInit {
  emailAdress;
  constructor(private email : Emailservice) { 
    this.emailAdress=this.email.getEmail();
    
  }

  ngOnInit() {
  }

}
