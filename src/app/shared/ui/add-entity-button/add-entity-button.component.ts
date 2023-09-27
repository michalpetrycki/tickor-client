import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BuilderService } from 'src/app/Services/builder/builder.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Component({
  selector: 'app-add-entity-button',
  templateUrl: './add-entity-button.component.html',
  styleUrls: ['./add-entity-button.component.scss']
})
export class AddEntityButtonComponent<T> {

  @Input() entityTypeName!: string;
  @Input() title!: string;
  @Input() message!: string;
  @Input() controls!: ControlBase<any>[] | null;
  @Output() createEventEmitter: EventEmitter<T> = new EventEmitter<T>();

  constructor(protected builderService: BuilderService<T>) {
    this.builderService.getNewEntityProperitesObservable().subscribe((newEntityProperties: T) => {
      if (newEntityProperties) {
        this.createEventEmitter.emit(newEntityProperties);
      }
    });
  }

  buttonClicked(): void {
    // this.builderService.openDialog();
    this.builderService.openBuilder(this.controls, this.title, this.message);
  }

}