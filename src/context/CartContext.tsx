import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Product } from '../types';

export interface CartItem {
    product: Product;
    quantity: number;
    selectedSize?: string;
}

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, quantity?: number, size?: string) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useLocalStorage<CartItem[]>('lwa-cart', []);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate totals whenever items change
    useEffect(() => {
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
        const price = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

        setTotalItems(itemCount);
        setTotalPrice(price);
    }, [items]);

    const addItem = (product: Product, quantity: number = 1, size?: string) => {
        setItems((currentItems: CartItem[]) => {
            const existingItemIndex = currentItems.findIndex(
                (item: CartItem) => item.product.id === product.id && item.selectedSize === size
            );

            if (existingItemIndex > -1) {
                // Item exists, update quantity
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            } else {
                // New item, add to cart
                return [...currentItems, { product, quantity, selectedSize: size }];
            }
        });
    };

    const removeItem = (productId: string) => {
        setItems((currentItems: CartItem[]) => currentItems.filter((item: CartItem) => item.product.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(productId);
            return;
        }

        setItems((currentItems: CartItem[]) =>
            currentItems.map((item: CartItem) =>
                item.product.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
