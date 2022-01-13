import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ], //On déclare les modules faisant parties de AdminModule
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    MyProfileComponent,
    AboutComponent
  ], //permet aux autres modules d'y avoir accès => permet à App.Module.TS de les importer et donc de faire l'affichage
  providers:[
    DashboardService //dit au component que les infos viendront d'ici
  ]
})
export class AdminModule { }
