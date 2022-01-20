import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipsComponent } from './starships/starships.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starships/:id', component: StarshipDetailComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
