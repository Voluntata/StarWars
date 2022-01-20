import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './starships/starships.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarshipsComponent,
    StarshipDetailComponent,
    HomeComponent,
    LoginFormComponent,
    SignInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginFormComponent,
    SignInComponent
  ]
})
export class AppModule { }
