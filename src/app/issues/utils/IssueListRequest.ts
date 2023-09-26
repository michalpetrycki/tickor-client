import { Pagination } from 'src/app/Objects/API/Pagination';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { ListRequest } from 'src/app/Objects/API/project/ListRequest';
import { PaginatedRequest } from 'src/app/Objects/API/PaginatedRequest';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class IssueListRequest implements ListRequest, PaginatedRequest {

    public readonly id?: number | number[];
    public readonly statusID?: number;
    public readonly subject?: string;
    public readonly name?: string;
    public readonly categoryID?: number;
    public readonly createdAt?: string;
    public readonly updatedAt?: string;

    public paginate?: Pagination;

    constructor(filters?: IssueListFilter) {
        if (filters) {
            this.id = filters.id;
            this.statusID = filters.statusID;
            this.subject = filters.subject;
            this.name = filters.name;
            this.categoryID = filters.categoryID;
            this.createdAt = filters.createdAt;
            this.updatedAt = filters.updatedAt;
        }
    }

    getEndpoint(): string {
        return EntityResourceType.issue + RequestApiService.listUrl;
    }

}

export type IssueListFilter = Omit<IssueListRequest, 'getEndpoint'>;
