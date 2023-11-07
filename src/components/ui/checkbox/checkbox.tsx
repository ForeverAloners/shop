import React from 'react';
import * as Checkboxs from '@radix-ui/react-checkbox';
import {CheckIcon, SunIcon} from '@radix-ui/react-icons';
import s from "./checkbox.module.css";
type  CheckboxPropsType = {
    title: string;
    isCheck: boolean;
    onChangeCheck: (value:boolean)=>void
}
 export const Checkbox = ({title,isCheck,onChangeCheck}:CheckboxPropsType) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkboxs.Root className={s.CheckboxRoot} defaultChecked id="c1" name={title}  checked={isCheck} onCheckedChange={onChangeCheck}>
                <Checkboxs.Indicator className={s.CheckboxIndicator}  >
                    <SunIcon />
                </Checkboxs.Indicator>
            </Checkboxs.Root>
            <label className={s.Label} htmlFor="c1">
                {title}
            </label>
        </div>
);
