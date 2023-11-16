import { PersonResponse } from "src/app/persons/utils/person.response";
import { Nullable } from "src/app/shared/utils/nullable.type";

export interface ActivityResponse {
    id: number;
    clientID: Nullable<number>;
    personID: Nullable<number>;
    projectID: Nullable<number>;
    issueID: Nullable<number>;
    issueCategoryID: Nullable<number>;
    issueStatusID: Nullable<number>;
    activityDate: string;
    updated: Nullable<Date>;
    activityType: Nullable<string>;
    activityDetails: Nullable<string>;
    author: Nullable<PersonResponse>;
}
