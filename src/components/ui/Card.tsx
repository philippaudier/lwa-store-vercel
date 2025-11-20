import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
    const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : '';

    return (
        <div
            className={`bg-secondary border border-default rounded-xl p-6 shadow-md transition-all duration-300 ${hoverStyles} ${className}`}
        >
            {children}
        </div>
    );
}
