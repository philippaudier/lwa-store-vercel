import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:scale-95';

    const variantStyles = {
        primary: 'bg-accent text-white hover:bg-accent-hover apple-shadow-md hover:apple-shadow-lg hover:-translate-y-0.5',
        secondary: 'bg-secondary text-white hover:opacity-90 apple-shadow-md hover:apple-shadow-lg hover:-translate-y-0.5',
        outline: 'border-2 border-default text-primary hover:bg-secondary hover:bg-opacity-10 hover:-translate-y-0.5',
        ghost: 'text-primary hover:bg-secondary hover:bg-opacity-10',
    };

    const sizeStyles = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-8 py-3.5 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
