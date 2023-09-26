import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IssueControlsService } from 'src/app/issues/data-access/issue-controls/issue-controls.service';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';

@Component({
    selector: 'app-issue-builder',
    templateUrl: './issue-builder.component.html',
    styleUrls: ['./issue-builder.component.scss'],
    providers: [ControlService, IssueControlsService]
})
export class IssueBuilderComponent implements OnInit {

    // // @Input() controls$: ControlBase<string>[] | null = [];
    // form!: FormGroup;
    // payLoad = '';
    // // controls$: Observable<ControlBase<string>[]>;

    // controls!: ControlBase<any>[] | null;

    // constructor(private qcs: ControlService, private controlsService: IssueControlsService) {
    //     // this.controls$ = this.controlsService.getControls();

    //     debugger;

    // }


    ngOnInit() {
    //     debugger;
    //     // this.form = this.qcs.toFormGroup(this.controls$ as ControlBase<string>[]);
    //     debugger;
    }

    // onSubmit() {
    //     this.payLoad = JSON.stringify(this.form.getRawValue());
    // }

}
