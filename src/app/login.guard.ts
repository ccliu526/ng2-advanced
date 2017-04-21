import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(next.queryParams['apikey']==123){
      return true;
    }else{
      console.log(next);
      console.log(state);
      // 導向登入頁
      this.router.navigateByUrl('/login');
      return false;
    }

  }
}
