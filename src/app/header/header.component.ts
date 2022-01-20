import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from '../login-form/login-form.component';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openLoginModal() {
    const modalRef = this.modalService.open(LoginFormComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openSignInModal() {
    const modalRef = this.modalService.open(SignInComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
