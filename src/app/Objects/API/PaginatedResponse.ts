export interface PaginatedResponse<T> {
    totalResultsCount: number;
    values: T[];
}
