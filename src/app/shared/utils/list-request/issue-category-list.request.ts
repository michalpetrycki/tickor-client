import { EntityResourceType } from 'src/app/Objects/entities/Entity';
import { RequestApiService } from 'src/app/Services/request-api/request-api.service';
import { DropdownOptionListRequest } from 'src/app/shared/utils/list-request/dropdown-option-list.request';

export class IssueCategoryListRequest implements DropdownOptionListRequest {

    getEndpoint(): string {
        return EntityResourceType.issueCategory + RequestApiService.listUrl;
    }

}
