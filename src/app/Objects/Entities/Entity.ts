export class Entity {

    id?: number;

    constructor(id?: number) {
        this.id = id;
    }

}

export enum EntityType {
    client = 'Client',
    project = 'Project',
    member = 'Member'
}

export enum EntityResourceType {
    client = 'client',
    project = 'project',
    member = 'person'
}
