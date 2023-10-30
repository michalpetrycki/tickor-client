import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-builder-dialog',
    templateUrl: './builder-dialog.component.html',
    styleUrls: ['./builder-dialog.component.scss'],
    providers: [ControlService]
})
export class BuilderDialogComponent<T> {

    title!: string;
    @Output() newEntityRequest: EventEmitter<any> = new EventEmitter<any>()

    controls$!: Observable<ControlBase<any>[]>;
    formGroup!: FormGroup;

    constructor(
        private qcs: ControlService,
        public dialogRef: MatDialogRef<BuilderDialogComponent<T>>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.controls$ = data.controls;
        this.controls$.subscribe((controls: ControlBase<any>[]) => {
            this.formGroup = this.qcs.toFormGroup(controls, null)
        });
    }

    onSubmit() {
        this.dialogRef.close(this.formGroup.getRawValue() as T);
    }

}