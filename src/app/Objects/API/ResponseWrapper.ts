export interface ResponseWrapper<T> {
    results?: T[];
    result?: T;
    totalResultsCount: number;
    status: string;
    error?: string;
    errors?: string[];
    message?: string;
}
