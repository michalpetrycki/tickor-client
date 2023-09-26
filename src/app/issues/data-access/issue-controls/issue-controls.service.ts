import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ProjectService } from 'src/app/Services/project/project.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { DropdownControl } from 'src/app/shared/utils/controls/dropdown-control';
import { TextboxControl } from 'src/app/shared/utils/controls/textbox-control';
import { ParamHelperService } from 'src/app/shared/utils/param/param.helper.service';

@Injectable({
  providedIn: 'root'
})
export class IssueControlsService {

  constructor(
    private projectService: ProjectService
  ) { }

  getControls() {

    const controls: ControlBase<string>[] = [

      new DropdownControl({
        key: 'status',
        label: 'Issue status',
        options: this.projectService.list().pipe(map((res: any) => ParamHelperService.toDropdownOptions(res))).pipe(delay(5000)),
        order: 1
      }),

      new TextboxControl({
        key: 'subject',
        label: 'Subject',
        type: 'text',
        required: true,
        order: 2
      }),

      new TextboxControl({
        key: 'name',
        label: 'Name',
        type: 'text',
        required: true,
        order: 3
      }),

      new DropdownControl({
        key: 'brave',
        label: 'Bravery Rating',
        options: of([
          { value: 'solid', displayString: 'Solid' },
          { value: 'great', displayString: 'Great' },
          { value: 'good', displayString: 'Good' },
          { value: 'unproven', displayString: 'Unproven' }
        ]),
        order: 4
      }),

    ];

    return of(controls.sort((a, b) => a.order - b.order));

  }

}
