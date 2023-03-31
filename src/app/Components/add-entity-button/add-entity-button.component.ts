import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { BuilderService } from 'src/app/Services/builder/builder.service';

@Component({
  selector: 'app-add-entity-button',
  templateUrl: './add-entity-button.component.html',
  styleUrls: ['./add-entity-button.component.scss']
})
export class AddEntityButtonComponent<T> {

  @Input() builderComponent!: ComponentType<any>;
  @Input() entityTypeName!: string;
  @Output() newEntityPropertiesEmitter: EventEmitter<T> = new EventEmitter<T>();

  constructor(protected builderService: BuilderService<T>) {
    this.builderService.getNewEntityProperitesObservable().subscribe((newEntityProperties: T) => {
      if (newEntityProperties) {
        this.newEntityPropertiesEmitter.emit(newEntityProperties);
      }
    });
  }

  buttonClicked(): void {
    this.builderService.openDialog();
  }

}
