import { EndpointRequest } from '../EndpointRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class MemberCreateRequest implements EndpointRequest {
    public readonly username!: string;
    public readonly email!: string;
    public readonly kind!: string;

    constructor(properties: MemberCreateProperties) {
        this.username = properties.username;
        this.email = properties.email;
        this.kind = properties.kind;
    }

    getEndpoint(): string {
        return EntityResourceType.project + RequestApiService.createUrl;
    }

}

export type MemberCreateProperties = Omit<MemberCreateRequest, 'getEndpoint'>;
