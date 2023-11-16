import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'activityType'
})
export class ActivityTypePipe implements PipeTransform {

    transform(activityType: string, activityDetails: string): string {

        let val = '';

        switch (activityType) {

            case 'create_issue': val = `Issue created\n${activityDetails ?? ''}`;
                break;
            case 'update_issue': val = `Issue updated\n${activityDetails ?? ''}`;
                break;
            default: val = '';
                break;
        }

        return val;

    }

}
