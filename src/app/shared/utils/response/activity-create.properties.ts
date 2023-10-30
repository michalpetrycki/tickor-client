export interface ActivityCreateProperties {
    clientID?: number;
    personID?: number;
    projectID?: number;
    issueID?: number;
    issueCategoryID?: number;
    issueStatusID?: number;
    activityDate?: Date;
    updated?: Date;
    activityType?: string;
    activityDetails?: string;
}
