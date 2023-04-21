import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberCreateProperties, MemberCreateRequest } from 'src/app/Objects/API/member/MemberCreateRequest';
import { MemberEditProperties, MemberEditRequest } from 'src/app/Objects/API/member/MemberEditRequest';
import { MemberListFilter, MemberListRequest } from 'src/app/Objects/API/member/MemberListRequest';
import { MemberResponse } from 'src/app/Objects/API/member/MemberResponse';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

@Injectable({
    providedIn: 'root'
})
export class MemberService {

    constructor(private apiService: RequestApiService<MemberResponse>) { }

    public list(filters?: MemberListFilter): Observable<MemberResponse[]> {
        const listRequest = new MemberListRequest(filters);
        return this.apiService.list(listRequest);
    }

    public listPaginated(paginate: Pagination, filters?: MemberListFilter): Observable<MemberResponse[]> {
        const listRequest = new MemberListRequest(filters);
        listRequest.paginate = paginate;
        return this.apiService.list(listRequest);
    }

    public create(properties: MemberCreateProperties): Observable<MemberResponse> {
        const createProperties = new MemberCreateRequest(properties);
        return this.apiService.post(createProperties);
    }

    public edit(properties: MemberEditProperties): Observable<MemberResponse> {
        const editProperties = new MemberEditRequest(properties);
        return this.apiService.put(editProperties);
    }
}
