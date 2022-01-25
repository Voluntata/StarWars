import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user';
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  isLoginMode = false;
  user: User = {
    email: "",
    password: ""
  }
  users: User[] = [];
  isUserRegist: boolean = false;


  constructor(public activeModal: NgbActiveModal, public router: Router, public loginService: LoginModalService) { }


  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }
  // cambiar Login mode a Sign In mode
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    //obtener data de formulario
    this.user.email = form.value.email;
    this.user.password = form.value.password;


    //comprobar si el usuario esta en Localstorage (se mudo al servicio)

    if(this.users.length >0){
      console.log(this.users)
    this.isUserRegist = this.loginService.isRegistered(this.user);}
    // else{
    //   this.isUserRegist = false;
    // }
    console.log(this.isUserRegist)

    if (this.isLoginMode) {
     // console.log(this.isUserRegist)
      // si es el modo de Login, comprobar si el usuario esta registardo
      if (this.isUserRegist) {
        console.log('User is logged');
        this.activeModal.close();
        this.router.navigate(['starships/'])
      }
      else {
        console.log('Faile to login')
      }

      // si es modo de registrarse, comprobar si esta registrado, si no - guardar en local storage
    } else {
     console.log(this.user);
      console.log(this.users);

      //si ya hay usuarios registardos
        if(this.users.length > 0){
        this.users = JSON.parse(localStorage.getItem('users') || '');}
        else{
          this.users.push(this.user);
          this.isLoginMode = true;
          console.log(this.users);
        }

        if (this.isUserRegist) {
       //alert('User is already registered');
          this.isLoginMode = true
        }
        else {
          this.users.push(this.user);
          this.isLoginMode = true;
          console.log(this.users);
        }

 localStorage.setItem("users", JSON.stringify(this.users));

   }

  }
}

// onSubmit(form: NgForm) {
//   if (!form.valid) {
//     return
//   }
//   //obtener data de formulario
//   this.user.email = form.value.email;
//   this.user.password = form.value.password;


//   //comprobar si el usuario esta en Localstorage (se mudo al servicio)
//   // const registUsers = JSON.parse(localStorage.getItem('users') || '');
//   // const isUserRegist: boolean = registUsers.find((registUser: User) => {
//   //   return (registUser.email === this.user.email && registUser.password === this.user.password) ? true : false
//   // });

//   const isUserRegist = this.loginService.isRegistered(this.user);
//   console.log(isUserRegist)

//   if (this.isLoginMode) {
// // si es el modo de Login, comprobar si el usuario esta registardo
//     if (isUserRegist) {
//       console.log('User is logged');
//       this.activeModal.close();
//       this.router.navigate(['starships/'])
//     }
//     else {
//       console.log('Faile to login')
//     }


// // si es modo de registrarse, comprobar si esta registrado, si no - guardar en local storage
//   } else {
//   //  console.log(this.user);
//     this.users = JSON.parse(localStorage.getItem('users') || '');
//    // console.log(this.users);
//     if (isUserRegist) {
//       console.log('User is already registered');
//       this.isLoginMode = true
//     }
//     else {
//       this.users.push(this.user);
//       this.isLoginMode = false
//     }
//     localStorage.setItem("users", JSON.stringify(this.users));
//   }

// }
