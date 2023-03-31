import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-builder-dialog',
  templateUrl: './builder-dialog.component.html',
  styleUrls: ['./builder-dialog.component.scss']
})
export class BuilderDialogComponent<T> {

  @ViewChild('dialog') dialog!: DialogComponent;
  creationForm = new FormGroup({});
  public animationSettings: Object = { effect: 'None' };
  @Input() title = '';
  @Input() builder!: ComponentType<any>;
  @Output() newEntityRequest: EventEmitter<any> = new EventEmitter<any>()
  showDialog = false;

  constructor(private builderService: BuilderService<T>) {
    this.builderService.getShowDialogObservable().subscribe((showDialog: boolean) => {
      this.showDialog = showDialog;
    });
  }

}
