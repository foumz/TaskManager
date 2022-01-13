import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"demo",component:DemoComponent}, // ici on définit les différentes routes de l'app
  {path:"",redirectTo:"dashboard",pathMatch:"full"} //si le path est vide, renvoie vers dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
