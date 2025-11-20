import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../../data/products';
import { Button } from '../ui/Button';

export function Hero() {
    const featuredProducts = getFeaturedProducts(2);

    return (
        <section className="relative hero-gradient py-24 md:py-40">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-20">
                    <h1 className="text-6xl md:text-8xl font-bold text-primary mb-8 animate-fade-in tracking-tight">
                        LWA
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                        Modern, minimalist clothing and accessories. Crafted with intention.
                    </p>
                    <Link to="/shop">
                        <Button size="lg" className="group">
                            Explore Collection
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Featured Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {featuredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="group relative glass-card rounded-2xl overflow-hidden apple-hover"
                        >
                            <div className={`${product.image} aspect-square flex items-center justify-center`}>
                                <span className="text-white text-3xl font-bold opacity-50 group-hover:opacity-70 transition-opacity">
                                    {product.name}
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-secondary text-sm capitalize">{product.category}</p>
                                    </div>
                                    <span className="text-2xl font-bold text-primary">€{product.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
