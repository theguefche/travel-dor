import { Button, ButtonProps } from '@nextui-org/react';
import { ReactNode, forwardRef } from 'react';

type IconButtonProps = ButtonProps & {
    children: ReactNode;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ children, className, ...rest }, ref) => {
        const combinedClassName = `bg-body flex justify-center items-center w-fit rounded-lg hover:bg-hover-icon ${className || ''}`;

        return (
            <Button ref={ref} isIconOnly className={combinedClassName} {...rest}>
                {children}
            </Button>
        );
    }
);

export default IconButton;
