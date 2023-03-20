import { EndpointRequest } from '../EndpointRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class ProjectCreateRequest implements EndpointRequest {
    public readonly name!: string;
    public readonly active!: boolean;
    public readonly clientID!: number;
    public readonly initialStartDate!: Date;
    public readonly initialEndDate!: Date;

    constructor(properties: ProjectCreateProperties) {
        this.name = properties.name;
        this.active = properties.active;
        this.clientID = properties.clientID;
        this.initialStartDate = properties.initialStartDate;
        this.initialEndDate = properties.initialEndDate;
    }

    getEndpoint(): string {
        return EntityResourceType.project + RequestApiService.createUrl;
    }

}

export type ProjectCreateProperties = Omit<ProjectCreateRequest, 'getEndpoint'>;
