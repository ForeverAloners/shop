import React, {useState} from 'react';
import s from "./input.module.css";

type ButtonPropsType = {
   label: string
    variant?: "primary" | "secondary"

}

export const Input = ({label, variant = "primary", ...restProps }:ButtonPropsType) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={`${s.inputContainer} ${s[variant]}`}>
            <input
                className={`${s.input} ${isInputFocused || inputValue ? s.activeInput : ""}`}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                value={inputValue}
                {...restProps}
            />
            <label className={`${s.label} ${isInputFocused || inputValue ? s.activeLabel : ""}`}>
                {label}
            </label>
        </div>
    );
};
