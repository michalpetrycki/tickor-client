import { ControlBase } from 'src/app/shared/utils/controls/control-base';

export class DateControl extends ControlBase<string> {
    override controlType = 'date';
}