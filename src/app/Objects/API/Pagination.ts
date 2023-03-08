export interface Pagination {
    filter?: string;
    sort?: string;
    order?: 'ASC' | 'DESC';
    pageSize: number;
    pageNo: number;
}
