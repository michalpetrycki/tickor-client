import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { PaginatedRequest } from 'src/app/Objects/API/PaginatedRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class ClientListRequest implements EndpointRequest, PaginatedRequest {

    public readonly id?: number | number[];
    public readonly name?: string;
    public readonly kind?: 'person' | 'company';

    public paginate?: Pagination;

    constructor(filters?: ClientListFilter) {
        if (filters) {
            this.id = filters.id;
            this.name = filters.name;
            this.kind = filters.kind;
        }
    }

    getEndpoint(): string {
        return EntityResourceType.client + RequestApiService.listUrl;
    }

}

export type ClientListFilter = Omit<ClientListRequest, 'getEndpoint'>;
