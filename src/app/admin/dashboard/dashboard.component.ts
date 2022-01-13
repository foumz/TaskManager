import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

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
  Index:number;

  Clients: string[] ;
  Projects: string[] ;
  Years: number[] ;
  TeamMembersSummary: any[];
  TeamMembers: any[];

  Today:Date;

  constructor(private dashboardService:DashboardService) {
    this.Index=0;
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
    this.TeamMembersSummary=dashboardService.getTeamMembersSummary();
    this.TeamMembers=[];
    this.Today=new Date();
  }
  ngOnInit(): void {
    
    this.Designation="Team leader";
    this.Username="John Smith";
    this.NoOfTeamMembers=67;
    this.PendingTasks=15;
    this.UpComingProjects=0.2;
    this.ProjectCost=500000;
    this.CurrentExpenditure=5632;
    this.AvailableFunds=65812;
    this.Index=0;
    this.Today=new Date();
   this.Clients=[
     "ABC Infotech LTD","Def software solution","Engie"
   ];

   this.Projects=[
     "Project A","Project B","Project C","Project D"
   ];

   for (var i=2019;i>2010;--i){
     this.Years.push(i);
   };

   this.TeamMembersSummary=this.dashboardService.getTeamMembersSummary();

   this.TeamMembers=[
     {Region:"East", Members:[
       {ID:1,Name:"Ford",Status:"Available"},
       {ID:2,Name:"Miller",Status:"Available"},
       {ID:3,Name:"Jones",Status:"Busy"},
       {ID:4,Name:"James",Status:"Busy"},
     ]},
     {Region:"West", Members:[
      {ID:5,Name:"Anna",Status:"Available"},
      {ID:6,Name:"Arrun",Status:"Available"},
      {ID:7,Name:"Jesus",Status:"Busy"},
      {ID:8,Name:"Peter",Status:"Busy"},
    ]},
    {Region:"South", Members:[
      {ID:9,Name:"Antoine",Status:"Available"},
      {ID:10,Name:"Filipe",Status:"Available"},
      {ID:11,Name:"Kuy",Status:"Busy"},
      {ID:12,Name:"Yuka",Status:"Busy"},
    ]},
    {Region:"North", Members:[
      {ID:13,Name:"Utku",Status:"Available"},
      {ID:14,Name:"Juda",Status:"Available"},
      {ID:15,Name:"Kraken",Status:"Busy"},
      {ID:16,Name:"Kim",Status:"Busy"},
    ]}
   ];

  }

  onProjectChange($event:any){
    if($event.target.innerHTML.trim()=="Project A"){
      this.ProjectCost=2113;
      this.CurrentExpenditure=95959;
      this.AvailableFunds=654654;
    }else if($event.target.innerHTML.trim()=="Project B"){
      this.ProjectCost=45257;
      this.CurrentExpenditure=104653;
      this.AvailableFunds=786876;
    }else if($event.target.innerHTML.trim()=="Project C"){
      this.ProjectCost=21782;
      this.CurrentExpenditure=273113;
      this.AvailableFunds=98864;
    }else if($event.target.innerHTML.trim()=="Project D"){
      this.ProjectCost=65422;
      this.CurrentExpenditure=3257;
      this.AvailableFunds=8561;
    }
    
  }

}
