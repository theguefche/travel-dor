import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";

interface PasswordInputProps {
    id?: string;
    name?: string;
    value: string;
    label?: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isInvalid?: boolean
    onBlur?: any;
    className?: string;
    variant: "bordered" | "flat" | "faded" | "underlined";
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    id,
    name,
    value,
    label = "Password",
    onChange,
    onBlur,
    className,
    variant,
    color,
    isInvalid
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            id={id}
            name={name}
            value={value}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            type={isVisible ? "text" : "password"}
            variant={variant}
            color={color}
            autoComplete="current-password"
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <Icon icon="mdi:eye" fontSize={25} />
                    ) : (
                        <Icon icon="mdi:eye-off" fontSize={25} />
                    )}
                </button>
            }
            className={className}
            isInvalid={isInvalid}
        />
    );
};

export default PasswordInput;
