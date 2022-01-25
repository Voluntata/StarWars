
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { LoginModalService } from './login-modal.service';
import { LoginFormComponent } from "src/app/login-form/login-form.component";


@Injectable({ providedIn: 'root' })
export class GuardService implements CanActivate {
  constructor(private router: Router, public loginService: LoginModalService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //  console.log("canActivate");
    this.loginService.openLoginModal(LoginFormComponent);
    if (this.loginService.isUserRegist) {
      this.loginService.closeModal(LoginFormComponent)
      return true;

    } else {
     // alert("Register");
      this.router.navigate(["home"]);
      return false;
    }
  }


}
