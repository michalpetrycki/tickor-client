import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'activityDate'
})
export class ActivityDatePipe implements PipeTransform {

    transform(activityDate: string): string {

        // Borrowed from https://stackoverflow.com/a/61341940
        if (activityDate) {
            const seconds = Math.floor((+new Date() - +new Date(activityDate)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals: { [key: string]: number } = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago';
                    } else {
                        return counter + ' ' + i + 's ago';
                    }
            }
        }
        return activityDate;

    }

}
