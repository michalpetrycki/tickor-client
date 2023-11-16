export class Entity {

    id?: number;

    constructor(id?: number) {
        this.id = id;
    }

}

export enum EntityType {
    client = 'Client',
    project = 'Project',
    member = 'Member',
    issue = 'Issue'
}

export enum EntityResourceType {
    client = 'client',
    project = 'project',
    member = 'person',
    issue = 'issue',
    issueCategory = 'issue-category',
    issueStatus = 'issue-status',
    activity = 'activity'
}
