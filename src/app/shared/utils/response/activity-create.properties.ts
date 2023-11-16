import { Nullable } from "src/app/shared/utils/nullable.type";

export interface ActivityCreateProperties {
    authorID: Nullable<number>;
    activityDate: Nullable<string>;
    updated: Nullable<Date>;
    activityType: Nullable<string>;
    activityDetails: Nullable<string>;
}
