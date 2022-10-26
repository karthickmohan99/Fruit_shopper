import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardSeviceService } from './authguard-sevice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice:AuthguardSeviceService, private router: Router) {}
  canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
   ): boolean{
    //   if(!this.Authguardservice.gettoken()){
    //     this.router.navigateByUrl("fruits/login");
    //   }
    // return this.Authguardservice.gettoken();
    let userData :any=this.Authguardservice.userInfo.getValue();
    console.log(userData,'userdata')
    if(userData && userData?.sub){
      if(state.url.indexOf("/login")!= -1){
        this.router.navigate(["/home"]);
        return false;
      }
      else{
        return true;
      }

  }else{
    if(state.url.indexOf("/login") == -1){
      // not logged in users only navigate to login page
      this.router.navigate(["/login"]);
      return false;
     }
     else{
      return true;
     }

  }
  }

}
