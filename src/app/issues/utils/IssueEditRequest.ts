import { EntityResourceType } from "src/app/Objects/entities/Entity";
import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";
import { RequestApiService } from "src/app/Services/request-api/request-api.service";
import { ActivityResponse } from "src/app/shared/utils/response/activity.response";

export class IssueUpdateRequest implements EndpointRequest {

    public readonly id!: number;
    public readonly subject!: string;
    public readonly name!: string;
    public readonly statusID!: number;
    public readonly categoryID!: number;
    public readonly projectID!: number;
    public activity!: ActivityResponse[];

    constructor(updateProperties: IssueUpdateProperties) {
        this.id = updateProperties.id;
        this.subject = updateProperties.subject;
        this.name = updateProperties.name;
        this.statusID = updateProperties.statusID;
        this.categoryID = updateProperties.categoryID;
        this.projectID = updateProperties.projectID;
        this.activity = updateProperties.activity;
    }

    getEndpoint(): string {
        return EntityResourceType.issue + RequestApiService.updateUrl;
    }

}

export type IssueUpdateProperties = Omit<IssueUpdateRequest, 'getEndpoint'>;
