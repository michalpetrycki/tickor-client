export class Entity {

    id?: number;

    constructor(id?: number) {
        this.id = id;
    }

}

export enum EntityType {
    client = 'Client'
}

export enum EntityResourceType {
    client = 'client'
}
