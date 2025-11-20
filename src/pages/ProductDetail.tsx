import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getProductById, getRelatedProducts } from '../data/products';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(id) : undefined;
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [showToast, setShowToast] = useState(false);
    const { addItem } = useCart();

    if (!product) {
        return (
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
                    <Link to="/shop">
                        <Button>Back to Shop</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = getRelatedProducts(product.id, 4);

    const handleAddToCart = () => {
        addItem(product, 1, selectedSize || undefined);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link to="/shop" className="inline-flex items-center text-secondary hover:text-accent mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Shop
                </Link>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Image */}
                    <div className={`${product.image} aspect-square rounded-2xl flex items-center justify-center`}>
                        <span className="text-white text-4xl font-bold opacity-50">
                            {product.name}
                        </span>
                    </div>

                    {/* Info */}
                    <div>
                        <div className="flex gap-2 mb-4">
                            {product.isNew && (
                                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                                    NEW
                                </span>
                            )}
                            {product.isLimited && (
                                <span className="bg-secondary text-white text-sm font-bold px-3 py-1 rounded-full">
                                    LIMITED
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl font-bold text-primary mb-2">{product.name}</h1>
                        <p className="text-secondary text-lg capitalize mb-6">{product.category}</p>
                        <p className="text-3xl font-bold text-primary mb-6">€{product.price}</p>

                        <p className="text-secondary text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Size Selector */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="mb-8">
                                <label className="block text-primary font-semibold mb-3">Select Size</label>
                                <div className="flex gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedSize === size
                                                ? 'bg-accent text-white'
                                                : 'bg-secondary border border-default text-primary hover:border-accent'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Add to Cart */}
                        <Button
                            size="lg"
                            onClick={handleAddToCart}
                            disabled={product.sizes && product.sizes.length > 0 && !selectedSize}
                            className="w-full md:w-auto"
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-8">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Toast Notification */}
                {showToast && (
                    <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
                        <Check className="w-6 h-6" />
                        <span className="font-semibold">Added to cart!</span>
                    </div>
                )}
            </div>
        </div>
    );
}
