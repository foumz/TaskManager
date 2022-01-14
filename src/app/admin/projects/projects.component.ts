import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  newProject:Project= new Project();
  editProject:Project=new Project();
  editIndex:any=null;
  constructor(private projectService:ProjectsService) {
    this.projects=[];
    
   }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe( //fait le call ajax fait le serveur (api) pour récupérer la liste de projects
        (reponse:Project[])=>{
          this.projects=reponse;
        }
    );
  }

  onSaveClick()
  {
    this.projectService.insertProject(this.newProject).subscribe((response) => {
      //Add Project to Grid
      var p: Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      //Clear New Project Dialog - TextBoxes
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
      
    }, (error) => {
      console.log(error);
    });
  }

  onEditClick(event:any,index:number)
  {
    this.editProject.projectID=this.projects[index].projectID;
    this.editProject.projectName=this.projects[index].projectName;
    this.editProject.dateOfStart=this.projects[index].dateOfStart;
    this.editProject.teamSize=this.projects[index].teamSize;
    this.editIndex=index;
  }

  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe((response:Project)=>{
      var p: Project=new Project();
      p.projectID=response.projectID;
      p.projectName=response.projectName;
      p.dateOfStart=response.dateOfStart;
      p.teamSize=response.teamSize;

      this.projects[this.editIndex]=p;

      this.editProject.projectID=null;
      this.editProject.projectName=null;
      this.editProject.dateOfStart=null;
      this.editProject.teamSize=null;
    },(error)=>{
      console.log(error);
    })
  }

}
