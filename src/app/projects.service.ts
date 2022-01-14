import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  urlPrefix: string="http://localhost:33068"
  constructor(private httpClient:HttpClient ) {

   }

   getAllProjects():Observable<Project[]>
   {
      return this.httpClient.get<Project[]>(this.urlPrefix+"/api/projects"); //Renvoie le json qu'on a mis dans l'api
   }

   insertProject(newProject: Project): Observable<Project>
   {
     return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject);
   }

   updateProject(existingProject:Project):Observable<Project>{
     return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", existingProject);
   }
}




