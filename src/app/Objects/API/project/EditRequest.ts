import { EndpointRequest } from "src/app/Objects/API/EndpointRequest";

export interface EditRequest extends EndpointRequest {
    id: number;
    getEndpoint(): string;
}
