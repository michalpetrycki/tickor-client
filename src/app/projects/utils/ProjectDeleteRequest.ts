import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class ProjectDeleteRequest implements EndpointRequest {
    public readonly id!: number;

    constructor(properties: ProjectDeleteProperties) {
        this.id = properties.id;
    }

    getEndpoint(): string {
        return EntityResourceType.project + RequestApiService.deleteUrl;
    }

}

export type ProjectDeleteProperties = Omit<ProjectDeleteRequest, 'getEndpoint'>;
