import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IssueService } from 'src/app/issues/data-access/issue-service/issue.service';
import { IssueResponse } from 'src/app/issues/utils/IssueResponse';

@Component({
    selector: 'app-issue-detail',
    templateUrl: './issue-detail.page.html',
    styleUrls: ['./issue-detail.page.scss']
})
export class IssueDetailPage implements OnInit {

    issue$: Observable<IssueResponse | undefined> | undefined;

    constructor(
        private issueService: IssueService
    ) { 
        this.issue$ = issueService.selectedIssue$;
     }

    ngOnInit(): void {
    }

}
