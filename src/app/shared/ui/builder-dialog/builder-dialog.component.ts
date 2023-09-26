import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Component({
    selector: 'app-builder-dialog',
    templateUrl: './builder-dialog.component.html',
    styleUrls: ['./builder-dialog.component.scss'],
    providers: [ControlService]
})
export class BuilderDialogComponent {

    builder!: ComponentType<any>;
    title!: string;
    @Output() newEntityRequest: EventEmitter<any> = new EventEmitter<any>()

    controls!: ControlBase<any>[] | null;
    payLoad = '';
    form!: FormGroup;

    constructor(
        private qcs: ControlService,
        public dialogRef: MatDialogRef<BuilderDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        // debugger;
        this.controls = data.controls;
        this.form = this.qcs.toFormGroup(this.controls as ControlBase<any>[]);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }

}