import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { IssueCreateProperties, IssueCreateRequest } from 'src/app/issues/utils/IssueCreateRequest';
import { IssueDeleteProperties, IssueDeleteRequest } from 'src/app/issues/utils/IssueDeleteRequest';
import { IssueListRequest, IssueListFilter } from 'src/app/issues/utils/IssueListRequest';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';

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
        const issueListRequest = new IssueListRequest(filters);
        issueListRequest.paginate = paginate;
        return this.apiService.getPaginated(issueListRequest);
    }

    public create(properties: IssueCreateProperties): Observable<IssueResponse> {
        const issueCreateProperties = new IssueCreateRequest(properties);
        return this.apiService.post(issueCreateProperties);
    }

    // public edit(properties: IssueEditProperties): Observable<IssueResponse | undefined> {
    //     const issueEditProperties = new IssueEditRequest(properties);
    //     return this.apiService.put(issueEditProperties);
    // }

    public delete(properties: IssueDeleteProperties): Observable<Object> {
        const issueDeleteRequest = new IssueDeleteRequest(properties);
        return this.apiService.delete(issueDeleteRequest);
    }

}
