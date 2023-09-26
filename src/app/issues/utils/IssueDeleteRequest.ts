import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class IssueDeleteRequest implements EndpointRequest {
    public readonly id!: number;

    constructor(properties: IssueDeleteProperties) {
        this.id = properties.id;
    }

    getEndpoint(): string {
        return EntityResourceType.issue + RequestApiService.deleteUrl;
    }

}

export type IssueDeleteProperties = Omit<IssueDeleteRequest, 'getEndpoint'>;
