import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { BuilderDialogComponent } from 'src/app/shared/ui/builder-dialog/builder-dialog.component';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Injectable({
    providedIn: 'root'
})
export class BuilderService<T> {

    private showDialogSubject: Subject<boolean> = new Subject();
    private closeSubject: Subject<any> = new Subject();
    private newEntityProperties: Subject<T> = new Subject<T>();

    constructor(private dialog: MatDialog) { }

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

    openBuilder(controls: Observable<ControlBase<string>[]>, title: string, message: string): void {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            title,
            message,
            controls
        };

        dialogConfig.panelClass = 'builder-dialog';

        this.dialog.open(BuilderDialogComponent, dialogConfig)
            .afterClosed().subscribe((createProperties?: T) => {

                if (createProperties) {
                    this.emitNewEntityProperties(createProperties);
                }

            });

    }

}
