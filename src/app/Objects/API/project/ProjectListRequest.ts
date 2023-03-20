import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { PaginatedRequest } from 'src/app/Objects/API/PaginatedRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { Pagination } from 'src/app/Objects/API/Pagination';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class ProjectListRequest implements EndpointRequest, PaginatedRequest {

    public readonly id?: number | number[];
    public readonly name?: string;
    public readonly active?: boolean;
    public readonly clientID?: number;

    public paginate?: Pagination;

    constructor(filters?: ProjectListFilter) {
        if (filters) {
            this.id = filters.id;
            this.name = filters.name;
            this.active = filters.active;
            this.clientID = filters.clientID;
        }
    }

    getEndpoint(): string {
        return EntityResourceType.project + RequestApiService.listUrl;
    }

}

export type ProjectListFilter = Omit<ProjectListRequest, 'getEndpoint'>;
