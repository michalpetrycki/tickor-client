import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { DropdownOptionResponse } from 'src/app/shared/utils/response/dropdown-options.response';
import { DropdownOptionListRequest } from 'src/app/shared/utils/list-request/dropdown-option-list.request';

@Injectable({
    providedIn: 'root'
})
export class DropdownOptionService {

    constructor(private apiService: RequestApiService<DropdownOptionResponse>) { }

    public list(listRequest: DropdownOptionListRequest): Observable<DropdownOptionResponse[]> {
        return this.apiService.list(listRequest);
    }

}
