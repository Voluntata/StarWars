import { Injectable } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from "src/app/models/user";


@Injectable({ providedIn: 'root' })

export class LoginModalService {
  user: User = {
    email: "",
    password: ""
  }
  users: User[] = [];
  isUserRegist: boolean = false;


  constructor(private modalService: NgbModal) { }

  openLoginModal(comp: any) {
    const modalRef = this.modalService.open(comp);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      error
      // console.log(error);
    });
  }

  closeModal(modal: any) {
    this.modalService.dismissAll(modal);
  }

 // comprobar si el usuario esta registradò
  isRegistered(user_: User) {
    const registUsers = JSON.parse(localStorage.getItem('users') || '');
    console.log(registUsers);
    console.log(user_);

    for (let user of registUsers) {
      if (user_.email == user.email && user_.password == user.password) {
        console.log(user_.email, user_.password)
        console.log(user.email, user.password)
        this.isUserRegist = true;
        console.log(this.isUserRegist)
        return this.isUserRegist
      }

      else {
        this.isUserRegist = false
      }
    }
    console.log(this.isUserRegist)
    return this.isUserRegist;


  }
}