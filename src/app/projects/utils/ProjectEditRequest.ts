import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { EndpointRequest } from 'src/app/Objects/API/EndpointRequest';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class ProjectEditRequest implements EndpointRequest {
    public readonly id: number;
    public readonly name!: string;
    public readonly active!: boolean;
    public readonly clientID!: number;

    constructor(properties: ProjectEditProperties) {
        this.id = properties.id;
        this.name = properties.name;
        this.active = properties.active;
        this.clientID = properties.clientID;
    }

    getEndpoint(): string {
        return EntityResourceType.project + RequestApiService.editUrl;
    }

}

export type ProjectEditProperties = Omit<ProjectEditRequest, 'getEndpoint'>;
