import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatDialogModule,
        MatProgressBarModule,
        MatIconModule
    ],
    exports: [
        MatDialogModule,
        MatProgressBarModule,
        MatIconModule
    ]
})

export class MaterialModule { }