import { EntityResourceType } from "src/app/Objects/entities/Entity";
import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";
import { RequestApiService } from "src/app/Services/request-api/request-api.service";
import { Nullable } from "src/app/shared/utils/nullable.type";

export class AddActivityRequest implements EndpointRequest {

    public readonly id?: number;
    public readonly clientID: Nullable<number>;
    public readonly personID: Nullable<number>;
    public readonly projectID: Nullable<number>;
    public readonly issueID: Nullable<number>;
    public readonly authorID: Nullable<number>;
    public readonly issueCategoryID: Nullable<number>;
    public readonly issueStatusID: Nullable<number>;
    public readonly activityDate: Nullable<string>;
    public readonly updated: Nullable<Date>;
    public readonly activityType: Nullable<string>;
    public readonly activityDetails: Nullable<string>;

    constructor(createProperties: ActivityCreateProperties) {
        this.id = createProperties.id;
        this.clientID = createProperties.clientID;
        this.personID = createProperties.personID;
        this.projectID = createProperties.projectID;
        this.issueID = createProperties.issueID;
        this.authorID = createProperties.authorID;
        this.issueCategoryID = createProperties.issueCategoryID;
        this.issueStatusID = createProperties.issueStatusID;
        this.activityDate = createProperties.activityDate;
        this.updated = createProperties.updated;
        this.activityType = createProperties.activityType;
        this.activityDetails = createProperties.activityDetails;
    }

    getEndpoint(): string {
        return EntityResourceType.activity + RequestApiService.createUrl;
    }

}

export type ActivityCreateProperties = Omit<AddActivityRequest, 'getEndpoint'>;
