// import { Injectable } from "@angular/core";
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from "@angular/router";
// import { BehaviorSubject, Observable } from "rxjs";
// import { map, take, tap } from "rxjs/operators";
// import { User } from "../models/user";

// @Injectable({ providedIn: "root" })
// export class AuthGuard implements CanActivate {
//   user = new BehaviorSubject<User>();
//   constructor(private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     router: RouterStateSnapshot
//   ): boolean | UrlTree | Observable<boolean|UrlTree> | Promise<boolean|UrlTree> {
//     return this.user.pipe(
//       take(1),
//       map((user) => {
//         const isAuth = !!user;
//         if(isAuth){
//           return true
//         }
//         return this.router.createUrlTree(['/'])
//       })
//       // tap(isAuth => {
//       //   if(!isAuth){
//       //     this.router.navigate(['/auth'])
//       //   }
//       // })
//     );
//   }
// }
