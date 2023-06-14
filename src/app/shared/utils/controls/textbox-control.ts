import { ControlBase } from 'src/app/shared/utils/controls/control-base';

export class TextboxControl extends ControlBase<string> {
    override controlType = 'textbox';
}