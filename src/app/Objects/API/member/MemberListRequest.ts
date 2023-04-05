import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { PaginatedRequest } from 'src/app/Objects/API/PaginatedRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class MemberListRequest implements EndpointRequest, PaginatedRequest {

    public readonly id?: number | number[];
    public readonly username?: string;
    public readonly email?: string;
    public readonly kind?: string;

    public paginate?: Pagination;

    constructor(filters?: MemberListFilter) {
        if (filters) {
            this.id = filters.id;
            this.username = filters.username;
            this.email = filters.email;
            this.kind = filters.kind;
        }
    }

    getEndpoint(): string {
        return EntityResourceType.member + RequestApiService.listUrl;
    }

}

export type MemberListFilter = Omit<MemberListRequest, 'getEndpoint'>;
