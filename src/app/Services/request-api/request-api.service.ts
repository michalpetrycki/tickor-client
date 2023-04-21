import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { AuthenticationService } from 'src/app/Services/authentication/authentication.service';
import { UnwrappingService } from 'src/app/Services/unwrapping/unwrapping.service';
import { map } from 'rxjs/operators';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService<ResponseType> {

  static createUrl = '/create';
  static editUrl = '/edit';
  static listUrl = '/list';
  static deleteUrl = '/delete';

  constructor(protected http: UnwrappingService, protected authService: AuthenticationService) { }

  public list(requestBody: EndpointRequest): Observable<ResponseType[]> {
    const headers = { 'Authorization': this.authService.token };
    return this.http.list<ResponseType>(requestBody.getEndpoint(), headers);
  }

  public getPaginated(requestBody: EndpointRequest): Observable<PaginatedResponse<ResponseType>> {
    const headers = { 'Authorization': this.authService.token };
    return this.http.get<ResponseType>(requestBody.getEndpoint(), headers);
  }

  public getSingle(requestBody: EndpointRequest, request: any): Observable<PaginatedResponse<ResponseType>> {
    const headers = { 'Authorization': this.authService.token };
    return this.http.get<ResponseType>(requestBody.getEndpoint(), headers);
  }

  public post(requestBody: EndpointRequest): Observable<ResponseType> {
    const headers = { 'Authorization': this.authService.token };
    return this.http.post<ResponseType>(requestBody.getEndpoint(), requestBody, headers);
  }

  public put(requestBody: EndpointRequest): Observable<ResponseType> {
    const headers = { 'Authorization': this.authService.token };
    return this.http.put<ResponseType>(requestBody.getEndpoint(), requestBody, headers);
  }

  public delete(requestBody: EndpointRequest, id: number): Observable<Object> {
    const headers = { 'Authorization': this.authService.token };
    return this.http.delete(requestBody.getEndpoint(), id, headers);
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
