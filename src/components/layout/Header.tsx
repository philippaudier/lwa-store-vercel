import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useCart } from '../../context/CartContext';
import { CartDrawer } from '../cart/CartDrawer';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { totalItems } = useCart();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/shop', label: 'Shop' },
        { to: '/lookbook', label: 'Lookbook' },
        { to: '/presentation', label: 'Presentation' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/about', label: 'About' },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 apple-blur bg-primary/80 border-b border-default">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex justify-between items-center h-18" style={{ height: 'var(--header-height)' }}>
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-all duration-300">
                            LWA
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-primary hover:text-accent transition-all duration-300 font-medium text-[15px] tracking-tight"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center gap-5">
                            <ThemeToggle />

                            <button
                                onClick={() => setCartOpen(true)}
                                className="relative p-2.5 text-primary hover:text-accent transition-all duration-300 hover:scale-110"
                                aria-label="Ouvrir le panier"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center apple-shadow-sm">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden p-2.5 text-primary hover:text-accent transition-all duration-300"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="md:hidden py-6 border-t border-default">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="block py-3.5 text-primary hover:text-accent transition-all duration-300 font-medium text-[15px]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
            </header>

            {/* Cart Drawer */}
            <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}
