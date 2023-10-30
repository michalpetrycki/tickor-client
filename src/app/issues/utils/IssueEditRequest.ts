import { EntityResourceType } from "src/app/Objects/entities/Entity";
import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";
import { RequestApiService } from "src/app/Services/request-api/request-api.service";
import { ActivityResponse } from "src/app/shared/utils/response/activity.response";
import { ActivityCreateProperties } from "src/app/shared/utils/response/activity-create.properties";

export class IssueUpdateRequest implements EndpointRequest {

    public readonly id!: number;
    public readonly subject!: string;
    public readonly name!: string;
    public readonly statusID!: number;
    public readonly categoryID!: number;
    public readonly activity!: ActivityCreateProperties[];

    constructor(updateProperties: IssueUpdateProperties) {
        this.id = updateProperties.id;
        this.subject = updateProperties.subject;
        this.name = updateProperties.name;
        this.statusID = updateProperties.statusID;
        this.categoryID = updateProperties.categoryID;
        this.activity = updateProperties.activity;
    }

    getEndpoint(): string {
        return EntityResourceType.issue + RequestApiService.editUrl;
    }

}

export type IssueUpdateProperties = Omit<IssueUpdateRequest, 'getEndpoint'>;
