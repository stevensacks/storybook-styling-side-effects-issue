import {ButtonHTMLAttributes, FC} from 'react';
import clsx from 'clsx';
import {primary} from './styles.module.css';

export type ButtonProps<T = HTMLButtonElement> = ButtonHTMLAttributes<T>;

const Button: FC<ButtonProps> = ({
    children,
    className,
    type = 'button',
    ...rest
}) => (
    <button
        className={clsx(
            'select-none whitespace-nowrap rounded border text-white text-base py-2 px-3',
            primary,
            className
        )}
        type={type}
        {...rest}
    >
        {children}
    </button>
);

export default Button;
