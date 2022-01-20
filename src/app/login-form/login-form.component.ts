import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  isLoginMode = false;
  user: User = {
    email: "voluntata@gmail.com",
    password: "123456"
  }
  users: User[] = [];

  constructor(public activeModal: NgbActiveModal, public router:Router) { }


  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.registered = true;

    const registUsers = JSON.parse(localStorage.getItem('users') || '');
    const isUserRegist: boolean = registUsers.find((registUser: User) => {
      return (registUser.email === this.user.email && registUser.password === this.user.password) ? true : false
    });

    if (this.isLoginMode) {

     if(isUserRegist) {
       console.log('User is logged');
       this.activeModal.close('Modal Closed');
       this.router.navigate(['starships/'])}
       else{
         console.log('Faile to login')}
    //  console.log(isUserRegist);


    } else {
      console.log(this.user);
      this.users = JSON.parse(localStorage.getItem('users') || '');
      console.log(this.users);
      if(isUserRegist){
        console.log('User is already registered');
      this.isLoginMode = true}
      else{
        this.users.push(this.user);
      this.isLoginMode = false}
      localStorage.setItem("users", JSON.stringify(this.users));
    }

  }
}
