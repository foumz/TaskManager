import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' //root veut dire qu'on a accès au service dans tout le projet
// })
@Injectable() //il faut appeler le service dans le module désiré
export class DashboardService {

getTeamMembersSummary():any[]{
  var TeamMembersSummary=[
    {Region:"East",TeamMembersCount:20,TemporaryUnavailableMembers:4},
    {Region:"West",TeamMembersCount:15,TemporaryUnavailableMembers:8},
    {Region:"North",TeamMembersCount:17,TemporaryUnavailableMembers:1},
    {Region:"South",TeamMembersCount:15,TemporaryUnavailableMembers:6}
  ]
  return TeamMembersSummary;
}
}
