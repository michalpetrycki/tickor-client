import { EndpointRequest } from '../EndpointRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class ClientCreateRequest implements EndpointRequest {
    public readonly username!: string;
    public readonly name!: string;
    public readonly kind?: 'person' | 'company';

    constructor(properties: ClientCreateProperties) {
        this.username = properties.username;
        this.name = properties.name;
        this.kind = properties.kind;
    }

    getEndpoint(): string {
        return EntityResourceType.client + RequestApiService.createUrl;
    }

}

export type ClientCreateProperties = Omit<ClientCreateRequest, 'getEndpoint'>;
