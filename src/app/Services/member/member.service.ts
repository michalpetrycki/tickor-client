import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberCreateProperties, MemberCreateRequest } from 'src/app/Objects/API/member/MemberCreateRequest';
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
    const memberListRequest = new MemberListRequest(filters);
    return this.apiService.request(memberListRequest);
  }

  public listPaginated(paginate: Pagination, filters?: MemberListFilter): Observable<PaginatedResponse<MemberResponse>> {
    const memberListRequest = new MemberListRequest(filters);
    memberListRequest.paginate = paginate;
    return this.apiService.requestPaginated(memberListRequest);
  }

  public create(properties: MemberCreateProperties): Observable<MemberResponse> {
    const memberCreateProperties = new MemberCreateRequest(properties);
    return this.apiService.requestFirstResult(memberCreateProperties);
  }

}
