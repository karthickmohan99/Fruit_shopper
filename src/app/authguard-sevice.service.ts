import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import{SAMPLEJWT}from '../app/global-constants'

@Injectable({
  providedIn: 'root'
})
export class AuthguardSeviceService {

  userInfo =new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor() {

    this.loadUserInfo();

   }
  gettoken(){
    return  !!localStorage.getItem('SeesionUser')
  }

  userLogin(login:any):Observable<any>{

    if(login && login.email && login.password
      ){
      return of (SAMPLEJWT).pipe(
        map((token)=> {
          if(!token){
            return false;
          }
          localStorage.setItem("access_token",token)
          const decodedUser =this.jwtHelper.decodeToken(token);
          console.log(decodedUser,'decodeduser')

          this.userInfo.next(decodedUser);
          console.log(this.userInfo,"decode user")
          return true;
        })
      )
    }
    return of (false);

  }
  loadUserInfo(){
    let userdata =this.userInfo.getValue();
      console.log(userdata,"udata")
    if(!userdata){
      const access_token = localStorage.getItem('access_token');
      if(access_token){
        userdata =this.jwtHelper.decodeToken(access_token);
        this.userInfo.next(userdata )

      }
    }

  }



}
