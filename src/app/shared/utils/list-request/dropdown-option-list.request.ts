import { ListRequest } from 'src/app/Objects/API/project/ListRequest';

export abstract class DropdownOptionListRequest implements ListRequest {

    public readonly id?: number | number[];
    public readonly name?: string;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    constructor(filters?: DropdownOptionListFilter) {
        if (filters) {
            this.id = filters.id;
            this.name = filters.name;
            this.createdAt = filters.createdAt;
            this.updatedAt = filters.updatedAt;
        }
    }

    getEndpoint(): string {
        return '';
    }

}

export type DropdownOptionListFilter = Omit<DropdownOptionListRequest, 'getEndpoint'>;
