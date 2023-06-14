import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";

export interface DeleteRequest extends EndpointRequest {
    id: number;
    getEndpoint(): string;
}
