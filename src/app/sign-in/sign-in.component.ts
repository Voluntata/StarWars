import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  onSubmit(form: NgForm){
    if(!form.valid){
      return
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password)
  }

}
