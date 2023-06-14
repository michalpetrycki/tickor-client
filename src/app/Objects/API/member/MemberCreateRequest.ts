import { CreateRequest } from 'src/app/Objects/API/project/CreateRequest';
import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';

export class MemberCreateRequest implements CreateRequest {

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
