import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { IssueListRequest, IssueListFilter } from 'src/app/issues/utils/IssueListRequest';
import { IssueUpdateProperties, IssueUpdateRequest } from 'src/app/issues/utils/IssueEditRequest';
import { IssueCreateProperties, IssueCreateRequest } from 'src/app/issues/utils/IssueCreateRequest';
import { IssueDeleteProperties, IssueDeleteRequest } from 'src/app/issues/utils/IssueDeleteRequest';
import { ActivityCreateProperties } from 'src/app/shared/utils/response/activity-create.properties';
import { AddActivityRequest } from 'src/app/issues/utils/AddActivityRequest';

@Injectable({
    providedIn: 'root'
})
export class IssueService {

    constructor(private apiService: RequestApiService<IssueResponse>) { }

    public list(filters?: IssueListFilter): Observable<IssueResponse[]> {
        const issueListRequest = new IssueListRequest(filters);
        return this.apiService.list(issueListRequest);
    }

    public listPaginated(paginate: Pagination, filters?: IssueListFilter): Observable<PaginatedResponse<IssueResponse>> {
        const issueListRequest: IssueListRequest = new IssueListRequest(filters);
        issueListRequest.paginate = paginate;
        return this.apiService.getPaginated(issueListRequest);
    }

    public getById(filters?: IssueListFilter): Observable<IssueResponse | undefined> {
        const getRequest: IssueListRequest = new IssueListRequest(filters);
        return this.apiService.getSingle(getRequest);
    }

    public create(properties: IssueCreateProperties): Observable<IssueResponse> {
        const request: IssueCreateRequest = new IssueCreateRequest(properties);
        return this.apiService.post(request);
    }

    public update(properties: IssueUpdateProperties): Observable<IssueResponse | undefined> {
        const request: IssueUpdateRequest = new IssueUpdateRequest(properties);
        return this.apiService.put(request);
    }

    public delete(properties: IssueDeleteProperties): Observable<Object> {
        const issueDeleteRequest: IssueDeleteRequest = new IssueDeleteRequest(properties);
        return this.apiService.delete(issueDeleteRequest);
    }

    public addActivity(issueID: number, properties: ActivityCreateProperties): Observable<IssueResponse | undefined> {
        const addActivityRequest: AddActivityRequest = new AddActivityRequest(properties);
        return this.apiService.post(addActivityRequest);
    }

}
