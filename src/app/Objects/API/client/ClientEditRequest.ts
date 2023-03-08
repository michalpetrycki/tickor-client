import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { EndpointRequest } from '../EndpointRequest';

export class ClientEditRequest implements EndpointRequest {
    public readonly id: number;
    public readonly name!: string;
    public readonly kind!: 'person' | 'company';

    constructor(properties: ClientEditProperties) {
        this.id = properties.id;
        this.name = properties.name;
        this.kind = properties.kind;
    }

    getEndpoint(): string {
        return EntityResourceType.client + RequestApiService.editUrl;
    }

}

export type ClientEditProperties = Omit<ClientEditRequest, 'getEndpoint'>;
