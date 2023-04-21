import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { EndpointRequest } from '../EndpointRequest';

export class MemberEditRequest implements EndpointRequest {
    public readonly id: number;
    public readonly username!: string;
    public readonly email!: string;
    public readonly kind!: string;

    constructor(properties: MemberEditProperties) {
        this.id = properties.id;
        this.username = properties.username;
        this.email = properties.email;
        this.kind = properties.kind;
    }

    getEndpoint(): string {
        return EntityResourceType.member + RequestApiService.editUrl;
    }

}

export type MemberEditProperties = Omit<MemberEditRequest, 'getEndpoint'>;
