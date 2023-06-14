import { ControlBase } from 'src/app/shared/utils/controls/control-base';

export class DropdownControl extends ControlBase<string> {
    override controlType = 'dropdown';
}