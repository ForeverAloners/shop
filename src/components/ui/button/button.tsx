import React, {ComponentProps, ReactNode} from "react";
import s from "./button.module.css";
import {Typography} from "../typography";

type ButtonPropsType = {
    children: ReactNode
    variant?: "primary" | "secondary"

} & ComponentProps<"button">
export const Button = ({children, variant = "primary", ...restProps}: ButtonPropsType) => {
    return <button className={`${s.button} ${s[variant]}`} {...restProps}><Typography>{children}</Typography></button>;
};
