import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  set(getDataFromDatabase){
    localStorage.setItem('user',JSON.stringify(getDataFromDatabase))

  }
  destroy(){
    localStorage.removeItem('user');
  }
}
