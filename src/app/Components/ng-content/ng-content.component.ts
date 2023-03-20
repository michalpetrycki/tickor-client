import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  template: `<div class="dialog-content-wrapper">
      <ng-content></ng-content>
</div>`
})
export class NgContentComponent {

}
