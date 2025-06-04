import type { ReactElement } from "react";

type Variants = "primary" | "secondary"
interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text:string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onclick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white ",
    "secondary": "bg-purple-400 text-purple-600"
}

export const Button = (props: ButtonProps) => {

    return <button className={variantStyles[props.variant]}>{props.text}</button>
}

<Button variant="primary" size="md" onclick={() => {}} text={"asd"}/>