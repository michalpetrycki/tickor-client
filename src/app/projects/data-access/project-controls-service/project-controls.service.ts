import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { DateControl } from 'src/app/shared/utils/controls/date-control';
import { DropdownControl } from 'src/app/shared/utils/controls/dropdown-control';
import { TextboxControl } from 'src/app/shared/utils/controls/textbox-control';

@Injectable()
export class ProjectControlsService {

    getControls() {

        const questions: ControlBase<string>[] = [

            // new DropdownControl({
            //     key: 'brave',
            //     label: 'Bravery Rating',
            //     options: [
            //         { key: 'solid', value: 'Solid' },
            //         { key: 'great', value: 'Great' },
            //         { key: 'good', value: 'Good' },
            //         { key: 'unproven', value: 'Unproven' }
            //     ],
            //     order: 4
            // }),

            new DropdownControl({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new DropdownControl({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new DropdownControl({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })


            // new TextboxControl({
            //     key: 'projectName',
            //     label: 'Project name',
            //     required: true,
            //     order: 1
            // }),

            // new DateControl({
            //     key: 'startDate',
            //     label: 'Start date',
            //     type: 'date',
            //     order: 2
            // }),

            // new DateControl({
            //     key: 'endDate',
            //     label: 'End date',
            //     type: 'date',
            //     order: 3
            // })

        ];

        return of(questions.sort((a, b) => a.order - b.order));

    }
}