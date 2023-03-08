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

  public request(requestBody: EndpointRequest): Observable<ResponseType[]> {
    type RequestType = EndpointRequest;
    const request = requestBody as RequestType;
    const headers = { 'Authorization': this.authService.token };
    return this.http.post<ResponseType>(request.getEndpoint(), request, headers).pipe(
      map(res => res.values));
  }

  public requestPaginated(requestBody: EndpointRequest): Observable<PaginatedResponse<ResponseType>> {
    type RequestType = EndpointRequest;
    const request = requestBody as RequestType;
    const headers = { 'Authorization': this.authService.token };
    return this.http.post<ResponseType>(request.getEndpoint(), request, headers);
  }

  public requestFirstResult(requestBody: EndpointRequest): Observable<ResponseType | undefined> {
    type RequestType = EndpointRequest;
    const request = requestBody as RequestType;
    const headers = { 'Authorization': this.authService.token };
    return this.http.post<ResponseType>(request.getEndpoint(), request, headers).pipe(
      map((res: { values: any[]; }) =>
        res.values.pop()
      ));
  }

}
