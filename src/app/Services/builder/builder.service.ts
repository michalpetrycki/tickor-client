import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { BuilderDialogComponent } from 'src/app/Components/builder-dialog/builder-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class BuilderService<T> {

    private showDialogSubject: Subject<boolean> = new Subject();
    private closeSubject: Subject<any> = new Subject();
    private newEntityProperties: Subject<T> = new Subject<T>();

    constructor(private dialog: MatDialog) { }
    // constructor() {}

    openDialog(): void {
        this.showDialogSubject.next(true);
    }

    closeDialog(): void {
        this.showDialogSubject.next(false);
    }

    getShowDialogObservable(): Observable<any> {
        return this.showDialogSubject.asObservable();
    }

    emitNewEntityProperties(props: T): void {
        this.newEntityProperties.next(props);
    }

    getNewEntityProperitesObservable(): Observable<T> {
        return this.newEntityProperties.asObservable();
    }



    openBuilder(builderComponent: ComponentType<any>): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title: 'Delete tenant?',
            message: 'Are you sure you want to remove this tenant?',
            component: builderComponent
        };

        const dialogHook = this.dialog.open(BuilderDialogComponent, dialogConfig);
        dialogHook.afterClosed().subscribe(() => {
            debugger;
        });

    }

}
