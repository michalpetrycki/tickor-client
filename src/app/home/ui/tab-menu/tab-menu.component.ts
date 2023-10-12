import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tab-menu',
    templateUrl: './tab-menu.component.html',
    styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit, OnChanges {

    @Input() selection!: any;

    tabs: { path: string, title: string }[] = [];

    constructor(
        private router: Router
    ) {
        this.tabs = [];
        this.tabs = [
            { path: '/projects', title: 'Projects' },
            { path: '/members', title: 'Members' },
            { path: '/issues', title: 'Issues' }
        ];
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selection.currentValue) {
            this.tabs = [
                { path: '/issues', title: 'Issues' }
            ];
            this.router.navigate(['/issues', { projectID: this.selection.projectID }]);
        }
    }

}
