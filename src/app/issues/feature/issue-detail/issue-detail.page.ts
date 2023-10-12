import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-issue-detail',
    templateUrl: './issue-detail.page.html',
    styleUrls: ['./issue-detail.page.scss']
})
export class IssueDetailPage implements OnInit {

    constructor(
        private router: Router
    ) { debugger; }

    ngOnInit(): void {
    }

}
