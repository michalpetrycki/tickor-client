import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";

export class IssueCreateRequest implements EndpointRequest {

    public readonly subject!: string;
    public readonly name!: string;
    public readonly statusID!: number;
    public readonly categoryID!: number;

    constructor(createProperties: IssueCreateProperties) {
        this.subject = createProperties.subject;
        this.name = createProperties.name;
        this.statusID = createProperties.statusID;
        this.categoryID = createProperties.categoryID;
    }

    getEndpoint(): string {
        return '#';
    }

}

export type IssueCreateProperties = Omit<IssueCreateRequest, 'getEndpoint'>;
