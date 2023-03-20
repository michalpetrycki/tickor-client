import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseWrapper } from 'src/app/Objects/API/ResponseWrapper';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnwrappingService {

  private static readonly successStatuses = [200, 201, 'noChange'];
  private static readonly apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  post<T>(endpoint: string, body: {}, headers: { [key: string]: string }): Observable<PaginatedResponse<T>> {
    return this.httpClient.post<ResponseWrapper<T>>(UnwrappingService.apiUrl + endpoint, body, headers)
      .pipe(
        map(res => {
          this.checkForErrors(res);
          const values = res.results ? Object.entries(res.results).map((value) => value[1]) : [res.result];
          return {
            totalResultsCount: res.totalResultsCount,
            values
          };
        }
        )
      );
  }

  private checkForErrors<T>(res: ResponseWrapper<T>) {
    if (!UnwrappingService.successStatuses.includes(res.status)) {
      throw new Error(`Error status: ${res.status}, message: ${res.message}`);
    }
  }

}
