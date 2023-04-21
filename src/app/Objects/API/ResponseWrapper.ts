export interface ResponseWrapper<T> {
    results?: T[];
    result?: any;
    totalResultsCount: number;
    status: string;
    error?: string;
    errors?: string[];
    message?: string;
}
