import { ActivityResponse } from "src/app/shared/utils/response/activity.response";

export interface IssueResponse {
    id: number;
    statusID: number;
    subject: string;
    updated: string;
    name: string;
    categoryID: number;
    projectID: number;
    activity: ActivityResponse[];
}
