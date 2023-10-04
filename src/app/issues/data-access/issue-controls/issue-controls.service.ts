import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { TextboxControl } from 'src/app/shared/utils/controls/textbox-control';
import { DropdownControl } from 'src/app/shared/utils/controls/dropdown-control';
import { ParamHelperService } from 'src/app/shared/utils/param/param.helper.service';
import { IssueStatusListRequest } from 'src/app/shared/utils/list-request/issue-status-list.request';
import { IssueCategoryListRequest } from 'src/app/shared/utils/list-request/issue-category-list.request';
import { DropdownOptionService } from 'src/app/shared/data-access/dropdown-option/dropdown-option.service';
import { DropdownOptionResponse } from 'src/app/shared/utils/response/dropdown-options.response';

@Injectable({
    providedIn: 'root'
})
export class IssueControlsService {

    constructor(
        private dropdownOptionService: DropdownOptionService
    ) { }

    getControls(): Observable<ControlBase<string>[]> {

        const controls: ControlBase<string>[] = [

            new TextboxControl({
                key: 'subject',
                label: 'Subject',
                type: 'text',
                required: true,
                order: 1
            }),

            new TextboxControl({
                key: 'name',
                label: 'Name',
                type: 'text',
                required: true,
                order: 2
            }),

            new DropdownControl({
                key: 'status',
                label: 'Status',
                options$: this.dropdownOptionService.list(new IssueStatusListRequest()).pipe(map((res: DropdownOptionResponse[]) => ParamHelperService.toDropdownOptions(res))),
                order: 3
            }),

            new DropdownControl({
                key: 'category',
                label: 'Category',
                options$: this.dropdownOptionService.list(new IssueCategoryListRequest()).pipe(map((res: DropdownOptionResponse[]) => ParamHelperService.toDropdownOptions(res))),
                order: 4
            })

        ];

        return of(controls.sort((a, b) => a.order - b.order));

    }

}
