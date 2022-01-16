import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [
  {path: '', redirectTo: '/starships', pathMatch: 'full'},
  {path: 'starships', component: StarshipsComponent},
  {path: 'starships/:id', component: StarshipDetailComponent},
  {path: '**', redirectTo: '/starships', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
