import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'heroes', component: HeroesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
