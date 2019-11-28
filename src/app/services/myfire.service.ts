import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class MyfireService {

  constructor() { }
  getDataFromDatabase(uid){
    var ref=firebase.database().ref("/user" + uid);
    return ref
    .once("value")
    .then(sndata => sndata.val())
    .catch(err => console.log(err))

  }
}
