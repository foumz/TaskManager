import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit 
{
  Designation: string ;
  Username: string ;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number ;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number ;
  CurrentExpenditure: number ;
  AvailableFunds: number ;

  Clients: string[] ;
  Projects: string[] ;
  Years: number[] ;
  // TeamMembersSummary: any = [];
  // TeamMembers: any = [];

  constructor() {
    this.Designation="";
    this.Username="";
    this.NoOfTeamMembers=0;
    this.TotalCostOfAllProjects=0;
    this.PendingTasks=0;
    this.UpComingProjects=0;
    this.ProjectCost=0;
    this.CurrentExpenditure=0;
    this.AvailableFunds=0;
    this.Clients=[];
    this.Projects=[];
    this.Years=[];
  }
  ngOnInit(): void {
    
    this.Designation="Team leader";
    this.Username="John Smith";
    this.NoOfTeamMembers=67;
    this.PendingTasks=15;
    this.UpComingProjects=2;
    this.ProjectCost=500000;
    this.CurrentExpenditure=5632;
    this.AvailableFunds=65812;


   this.Clients=[
     "ABC Infotech LTD","Def software solution","Engie"
   ];

   this.Projects=[
     "Project A","Project B","Project C","Project D"
   ];

   for (var i=2019;i>2010;++i){
     this.Years.push(i);
   }


  }

}
