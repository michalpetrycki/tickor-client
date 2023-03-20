import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { ProjectListFilter, ProjectListRequest } from 'src/app/Objects/API/project/ProjectListRequest';
import { ProjectCreateProperties, ProjectCreateRequest } from 'src/app/Objects/API/project/ProjectCreateRequest';
import { ProjectEditProperties, ProjectEditRequest } from 'src/app/Objects/API/project/ProjectEditRequest';
import { ProjectResponse } from 'src/app/Objects/API/project/ProjectResponse';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private static _selectedProject: ProjectResponse | undefined;

  static get selectedProject(): ProjectResponse | undefined {
    return ProjectService._selectedProject;
  }

  static set selectedProject(val: ProjectResponse | undefined) {
    ProjectService._selectedProject = val;
  }

  constructor(private apiService: RequestApiService<ProjectResponse>) { }

  public list(filters?: ProjectListFilter): Observable<ProjectResponse[]> {
    const projectListRequest = new ProjectListRequest(filters);
    return this.apiService.request(projectListRequest);
  }

  public listPaginated(paginate: Pagination, filters?: ProjectListFilter): Observable<PaginatedResponse<ProjectResponse>> {
    const projectListRequest = new ProjectListRequest(filters);
    projectListRequest.paginate = paginate;
    return this.apiService.requestPaginated(projectListRequest);
  }

  public create(properties: ProjectCreateProperties): Observable<ProjectResponse> {
    const projectCreateProperties = new ProjectCreateRequest(properties);
    return this.apiService.requestFirstResult(projectCreateProperties);
  }

  public edit(properties: ProjectEditProperties): Observable<ProjectResponse | undefined> {
    const projectEditProperties = new ProjectEditRequest(properties);
    return this.apiService.requestFirstResult(projectEditProperties);
  }

}
