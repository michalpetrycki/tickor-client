import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-builder-dialog',
    templateUrl: './builder-dialog.component.html',
    styleUrls: ['./builder-dialog.component.scss']
})
export class BuilderDialogComponent {

    builder!: ComponentType<any>;
    title!: string;
    @Output() newEntityRequest: EventEmitter<any> = new EventEmitter<any>()

    constructor(
        public dialogRef: MatDialogRef<BuilderDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

}