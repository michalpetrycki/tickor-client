import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/ui/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

    @Input() project: any | null;
    @Input() err: any | null;
    @Output() removeProject: EventEmitter<number> = new EventEmitter<number>();

    constructor(private dialog: MatDialog, private router: Router) { }

    ngOnInit(): void {
    }

    goToProjectDetails(projectID: number): void {
        this.router.navigate(['projects/' + [projectID]]);
    }

    deleteProject(projectID: number): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: 'Delete project?',
            message: 'Are you sure you want to remove this project?'
        };

        const dialogHook = this.dialog.open(ConfirmationDialogComponent, dialogConfig);
        dialogHook.afterClosed().subscribe((confirm: boolean) => {

            if (confirm) {
                this.removeProject.emit(projectID)
            }

        });

    }

}
