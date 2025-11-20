import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-primary z-50 apple-shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-default">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="w-6 h-6 text-accent" />
                        <h2 className="text-2xl font-bold text-primary">
                            Panier ({totalItems})
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-secondary rounded-lg transition-all duration-300"
                        aria-label="Fermer le panier"
                    >
                        <X className="w-6 h-6 text-primary" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <ShoppingBag className="w-16 h-16 text-secondary mb-4 opacity-50" />
                            <p className="text-secondary text-lg mb-2">Votre panier est vide</p>
                            <p className="text-secondary text-sm mb-6">
                                Ajoutez des articles pour commencer vos achats
                            </p>
                            <Link to="/shop" onClick={onClose}>
                                <Button>Découvrir la boutique</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={`${item.product.id}-${item.selectedSize}`}
                                    className="glass-card p-4 rounded-xl"
                                >
                                    <div className="flex gap-4">
                                        {/* Product Image */}
                                        <div className={`${item.product.image} w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-white text-xs font-bold opacity-50">
                                                {item.product.name}
                                            </span>
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-primary truncate">
                                                {item.product.name}
                                            </h3>
                                            <p className="text-sm text-secondary capitalize">
                                                {item.product.category}
                                            </p>
                                            {item.selectedSize && (
                                                <p className="text-sm text-secondary">
                                                    Taille: {item.selectedSize}
                                                </p>
                                            )}
                                            <p className="text-lg font-bold text-primary mt-1">
                                                €{item.product.price}
                                            </p>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeItem(item.product.id)}
                                            className="p-2 hover:bg-secondary rounded-lg transition-all duration-300 h-fit"
                                            aria-label="Retirer du panier"
                                        >
                                            <X className="w-5 h-5 text-secondary" />
                                        </button>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            className="p-2 bg-secondary hover:bg-opacity-80 rounded-lg transition-all duration-300"
                                            aria-label="Diminuer la quantité"
                                        >
                                            <Minus className="w-4 h-4 text-primary" />
                                        </button>
                                        <span className="text-primary font-semibold min-w-[2rem] text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            className="p-2 bg-secondary hover:bg-opacity-80 rounded-lg transition-all duration-300"
                                            aria-label="Augmenter la quantité"
                                        >
                                            <Plus className="w-4 h-4 text-primary" />
                                        </button>
                                        <span className="ml-auto text-primary font-bold">
                                            €{(item.product.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-default p-6 space-y-4">
                        <div className="flex justify-between items-center text-lg">
                            <span className="font-semibold text-primary">Total</span>
                            <span className="font-bold text-primary text-2xl">
                                €{totalPrice.toFixed(2)}
                            </span>
                        </div>
                        <Link to="/checkout" onClick={onClose} className="block">
                            <Button className="w-full" size="lg">
                                Passer la commande
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
