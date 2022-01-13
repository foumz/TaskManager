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

}
