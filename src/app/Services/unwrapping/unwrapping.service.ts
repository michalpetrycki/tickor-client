import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ResponseWrapper } from 'src/app/Objects/API/ResponseWrapper';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ListRequest } from 'src/app/Objects/API/project/ListRequest';

@Injectable({
    providedIn: 'root'
})
export class UnwrappingService {

    private static readonly successStatuses = [200, 201, 'noChange'];
    private static readonly apiUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    list<T>(endpoint: string, requestBody: ListRequest, headers: { [key: string]: string }): Observable<T[]> {
        return this.httpClient.post<ResponseWrapper<T>>(UnwrappingService.apiUrl + endpoint, requestBody, headers)
            .pipe(
                retry(3),
                tap((res: ResponseWrapper<T>) => console.log(res)),
                map((res: ResponseWrapper<T>) => res.results || [])
            );
    };

    get<T>(endpoint: string, headers: { [key: string]: string }): Observable<PaginatedResponse<T>> {
        return this.httpClient.get<ResponseWrapper<T>>(UnwrappingService.apiUrl + endpoint, headers)
            .pipe(
                retry(3),
                tap((res: ResponseWrapper<T>) => console.log(res)),
                map((res: ResponseWrapper<T>) => {
                    return {
                        totalResultsCount: 0,
                        values: []
                    };
                }),
            );
    };

    getById<T>(body: ListRequest, headers: { [key: string]: string }): Observable<T | undefined> {
        return this.httpClient.post<ResponseWrapper<T>>(UnwrappingService.apiUrl + body.getEndpoint(), body, headers)
            .pipe(
                tap(res => console.log(res)),
                map((res: ResponseWrapper<T>) => {
                    return res.results?.pop();
                })
            );
    };

    post<T>(body: ListRequest, headers: { [key: string]: string }): Observable<T> {
        return this.httpClient.post<T>(UnwrappingService.apiUrl + body.getEndpoint(), body, headers)
            .pipe(
                tap(res => console.log(res)),
                map((res: T) => res)
            );
    };

    put<T>(endpoint: string, body: {}, headers: { [key: string]: string }): Observable<T | undefined> {
        return this.httpClient.put<ResponseWrapper<T>>(UnwrappingService.apiUrl + endpoint, body, headers)
            .pipe(
                tap(res => console.log(res)),
                map((res: ResponseWrapper<T>) => {
                    return res.result;
                })
            );
    };

    delete(endpoint: string, id: number | number[], headers: { [key: string]: string }): Observable<Object> {
        return this.httpClient.delete(`${UnwrappingService.apiUrl}/${endpoint}/${id}`, { headers, body: { id } })
            .pipe(
                tap(res => { console.log(res); }),
                map((res: Object) => {
                    return res;
                })
            );
    };

    handleError(a: any): Observable<Error> {
        return throwError(() => new Error('Something bad happened; please try again later.'));
    };

}
