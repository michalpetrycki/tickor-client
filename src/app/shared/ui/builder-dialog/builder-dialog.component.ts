import { FormGroup } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';

@Component({
    selector: 'app-builder-dialog',
    templateUrl: './builder-dialog.component.html',
    styleUrls: ['./builder-dialog.component.scss'],
    providers: [ControlService]
})
export class BuilderDialogComponent<T> {

    title!: string;
    @Output() newEntityRequest: EventEmitter<any> = new EventEmitter<any>()

    controls!: ControlBase<any>[] | null;
    formGroup!: FormGroup;

    constructor(
        private qcs: ControlService,
        public dialogRef: MatDialogRef<BuilderDialogComponent<T>>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.title = data.title;
        this.controls = data.controls;
        this.formGroup = this.qcs.toFormGroup(this.controls as ControlBase<any>[]);
    }

    onSubmit() {
        this.dialogRef.close(this.formGroup.getRawValue() as T);
    }

}