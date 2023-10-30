import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { PaginatedResponse } from 'src/app/Objects/API/PaginatedResponse';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { ClientListFilter, ClientListRequest } from 'src/app/Objects/API/client/ClientListRequest';
import { ClientCreateProperties, ClientCreateRequest } from 'src/app/Objects/API/client/ClientCreateRequest';
import { ClientEditProperties, ClientEditRequest } from 'src/app/Objects/API/client/ClientEditRequest';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private static _selectedClient: ClientResponse | undefined;

    static get selectedClient(): ClientResponse | undefined {
        return ClientService._selectedClient;
    }

    static set selectedClient(val: ClientResponse | undefined) {
        ClientService._selectedClient = val;
    }

    constructor(private apiService: RequestApiService<ClientResponse>) { }

    public list(filters?: ClientListFilter): Observable<ClientResponse[]> {
        const clientListRequest = new ClientListRequest(filters);
        return this.apiService.list(clientListRequest);
    }

    public listPaginated(paginate: Pagination, filters?: ClientListFilter): Observable<ClientResponse[] | Error> {
        const clientListRequest = new ClientListRequest(filters);
        clientListRequest.paginate = paginate;
        return this.apiService.list(clientListRequest);
    }

    public create(properties: ClientCreateProperties): Observable<ClientResponse | Error> {
        const clientCreateProperties = new ClientCreateRequest(properties);
        return this.apiService.post(clientCreateProperties);
    }

    public edit(properties: ClientEditProperties): Observable<ClientResponse | undefined> {
        const clientEditProperties = new ClientEditRequest(properties);
        return this.apiService.put(clientEditProperties);
    }

}
