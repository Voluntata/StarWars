import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginModalService } from '../../services/login-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginModalService) { }

  ngOnInit(): void {
  }

  openLoginModal() {
    this.loginService.openLoginModal(LoginFormComponent)
  }


}
