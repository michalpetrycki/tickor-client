import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProjectControlsService } from 'src/app/projects/data-access/project-controls-service/project-controls.service';
import { ControlBase } from 'src/app/shared/utils/controls/control-base';
import { ControlService } from 'src/app/shared/utils/controls-service/controls.service';

@Component({
    selector: 'app-project-builder',
    templateUrl: './project-builder.component.html',
    styleUrls: ['./project-builder.component.scss'],
    providers: [ControlService, ProjectControlsService]
})
export class ProjectBuilderComponent implements OnInit {

    @Input() controls: ControlBase<string>[] | null = [];
    form!: FormGroup;
    payLoad = '';
    controls$: Observable<ControlBase<string>[]>;

    constructor(private qcs: ControlService, private controlsService: ProjectControlsService) {
        this.controls$ = this.controlsService.getControls();
    }

    ngOnInit() {
        debugger;
        this.form = this.qcs.toFormGroup(this.controls as ControlBase<string>[]);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }

}
