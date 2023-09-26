import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { ProjectResponse } from 'src/app/projects/utils/ProjectResponse';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { ProjectListFilter, ProjectListRequest } from 'src/app/projects/utils/ProjectListRequest';
import { ProjectEditProperties, ProjectEditRequest } from 'src/app/projects/utils/ProjectEditRequest';
import { ProjectCreateProperties, ProjectCreateRequest } from 'src/app/projects/utils/ProjectCreateRequest';
import { ProjectDeleteProperties, ProjectDeleteRequest } from 'src/app/projects/utils/ProjectDeleteRequest';

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
        return this.apiService.list(projectListRequest);
    }

    public listPaginated(paginate: Pagination, filters?: ProjectListFilter): Observable<PaginatedResponse<ProjectResponse>> {
        const projectListRequest = new ProjectListRequest(filters);
        projectListRequest.paginate = paginate;
        return this.apiService.getPaginated(projectListRequest);
    }

    public create(properties: ProjectCreateProperties): Observable<ProjectResponse> {
        const projectCreateProperties = new ProjectCreateRequest(properties);
        return this.apiService.post(projectCreateProperties);
    }

    public edit(properties: ProjectEditProperties): Observable<ProjectResponse | undefined> {
        const projectEditProperties = new ProjectEditRequest(properties);
        return this.apiService.put(projectEditProperties);
    }

    public delete(properties: ProjectDeleteProperties): Observable<Object> {
        const projectDeleteRequest = new ProjectDeleteRequest(properties);
        return this.apiService.delete(projectDeleteRequest);
    }

}
