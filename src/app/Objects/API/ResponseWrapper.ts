export interface ResponseWrapper<T> {
    results?: { readonly [id: string]: T };
    result?: any;
    totalResultsCount: number;
    status: string;
    error?: string;
    errors?: string[];
    message?: string;
}
