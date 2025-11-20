import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, CreditCard, Package, Truck } from 'lucide-react';

export function Checkout() {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'FR',
    });

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center py-12">
                <div className="text-center max-w-md mx-auto px-4">
                    <Package className="w-16 h-16 text-secondary mx-auto mb-4 opacity-50" />
                    <h1 className="text-3xl font-bold text-primary mb-4">Votre panier est vide</h1>
                    <p className="text-secondary mb-8">
                        Ajoutez des articles à votre panier pour continuer vos achats
                    </p>
                    <Link to="/shop">
                        <Button size="lg">Découvrir la boutique</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePayment = async () => {
        setIsProcessing(true);

        try {
            // TODO: Integrate Revolut Payment Widget
            // For now, simulate payment
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Clear cart and redirect to success page
            clearCart();
            alert('Paiement réussi ! Merci pour votre commande.');
            navigate('/');
        } catch (error) {
            console.error('Payment error:', error);
            alert('Erreur lors du paiement. Veuillez réessayer.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link to="/shop" className="inline-flex items-center text-secondary hover:text-accent mb-8 transition-all duration-300">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Retour à la boutique
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 tracking-tight">
                    Finaliser la commande
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Shipping Info */}
                    <div>
                        <div className="glass-card p-8 rounded-2xl mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Truck className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-bold text-primary">Informations de livraison</h2>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-primary font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-primary font-medium mb-2">Nom complet *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                        placeholder="Jean Dupont"
                                    />
                                </div>

                                <div>
                                    <label className="block text-primary font-medium mb-2">Téléphone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                        placeholder="+33 6 12 34 56 78"
                                    />
                                </div>

                                <div>
                                    <label className="block text-primary font-medium mb-2">Adresse *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                        placeholder="123 Rue de la Paix"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-primary font-medium mb-2">Ville *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                            placeholder="Paris"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-primary font-medium mb-2">Code postal *</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                            placeholder="75001"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-primary font-medium mb-2">Pays *</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                                    >
                                        <option value="FR">France</option>
                                        <option value="BE">Belgique</option>
                                        <option value="CH">Suisse</option>
                                        <option value="LU">Luxembourg</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div>
                        <div className="glass-card p-8 rounded-2xl sticky top-24">
                            <div className="flex items-center gap-3 mb-6">
                                <Package className="w-6 h-6 text-accent" />
                                <h2 className="text-2xl font-bold text-primary">Récapitulatif</h2>
                            </div>

                            {/* Order Items */}
                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {items.map((item) => (
                                    <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4">
                                        <div className={`${item.product.image} w-16 h-16 rounded-lg flex-shrink-0`} />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-primary truncate">{item.product.name}</h3>
                                            {item.selectedSize && (
                                                <p className="text-sm text-secondary">Taille: {item.selectedSize}</p>
                                            )}
                                            <p className="text-sm text-secondary">Qté: {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-primary">€{(item.product.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-default pt-6 space-y-3">
                                <div className="flex justify-between text-secondary">
                                    <span>Sous-total</span>
                                    <span>€{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-secondary">
                                    <span>Livraison</span>
                                    <span>Gratuite</span>
                                </div>
                                <div className="flex justify-between text-2xl font-bold text-primary pt-3 border-t border-default">
                                    <span>Total</span>
                                    <span>€{totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Payment Button */}
                            <div className="mt-8">
                                <Button
                                    size="lg"
                                    onClick={handlePayment}
                                    disabled={isProcessing || !formData.email || !formData.name || !formData.address || !formData.city || !formData.postalCode}
                                    className="w-full"
                                >
                                    <CreditCard className="w-5 h-5 mr-2" />
                                    {isProcessing ? 'Traitement...' : 'Payer maintenant'}
                                </Button>

                                <p className="text-xs text-secondary text-center mt-4">
                                    Paiement sécurisé par Revolut
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
