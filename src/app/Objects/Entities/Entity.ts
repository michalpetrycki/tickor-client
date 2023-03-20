export class Entity {

    id?: number;

    constructor(id?: number) {
        this.id = id;
    }

}

export enum EntityType {
    client = 'Client',
    project = 'Project'
}

export enum EntityResourceType {
    client = 'client',
    project = 'project'
}
