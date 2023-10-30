import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from 'src/app/Services/authentication/authentication.service';
import { UnwrappingService } from 'src/app/Services/unwrapping/unwrapping.service';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { DeleteRequest } from 'src/app/Objects/API/project/DeleteRequest';
import { EditRequest } from 'src/app/Objects/API/project/EditRequest';
import { ListRequest } from 'src/app/Objects/API/project/ListRequest';
import { CreateRequest } from 'src/app/Objects/API/project/CreateRequest';

@Injectable({
    providedIn: 'root'
})
export class RequestApiService<ResponseType> {

    static createUrl = '/create';
    static editUrl = '/edit';
    static listUrl = '/list';
    static deleteUrl = '/delete';

    constructor(protected http: UnwrappingService, protected authService: AuthenticationService) { }

    public list(requestBody: ListRequest): Observable<ResponseType[]> {
        const headers = { 'Authorization': this.authService.token };
        return this.http.list<ResponseType>(requestBody.getEndpoint(), requestBody, headers);
    }

    public getPaginated(requestBody: ListRequest): Observable<PaginatedResponse<ResponseType>> {
        const headers = { 'Authorization': this.authService.token };
        return this.http.get<ResponseType>(requestBody.getEndpoint(), headers);
    }

    public getSingle(requestBody: ListRequest): Observable<ResponseType | undefined> {
        const headers = { 'Authorization': this.authService.token };
        return this.http.getById<ResponseType>(requestBody, headers);
    }

    public post(requestBody: CreateRequest): Observable<ResponseType> {
        const headers = { 'Authorization': this.authService.token };
        return this.http.post<ResponseType>(requestBody, headers);
    }

    public put(requestBody: EditRequest): Observable<ResponseType | undefined> {
        const headers = { 'Authorization': this.authService.token };
        return this.http.put<ResponseType>(requestBody.getEndpoint(), requestBody, headers);
    }

    public delete(requestBody: DeleteRequest): Observable<Object> {
        const headers = { 'Authorization': this.authService.token };
        return this.http.delete(requestBody.getEndpoint(), requestBody.id, headers);
    }

    // public requestPaginated(requestBody: EndpointRequest): Observable<PaginatedResponse<ResponseType>> {
    //   type RequestType = EndpointRequest;
    //   const request = requestBody as RequestType;
    //   const headers = { 'Authorization': this.authService.token };
    //   return this.http.post<ResponseType>(request.getEndpoint(), request, headers);
    // }

    // public requestFirstResult(requestBody: EndpointRequest): Observable<ResponseType> {
    //   type RequestType = EndpointRequest;
    //   const request = requestBody as RequestType;
    //   const headers = { 'Authorization': this.authService.token };
    //   return this.http.post<ResponseType>(request.getEndpoint(), request, headers).pipe(
    //     map((res: { values: any[]; }) =>
    //       res.values.pop()
    //     ));
    // }

}
