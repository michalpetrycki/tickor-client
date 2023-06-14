import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";

export interface ListRequest extends EndpointRequest {
    id?: number | number[];
    getEndpoint(): string;
}
