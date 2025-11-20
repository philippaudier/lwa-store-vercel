import { Link } from 'react-router-dom';
import type { Product } from '../../types';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link to={`/product/${product.id}`} className="group block">
            <div className="glass-card rounded-2xl overflow-hidden apple-hover">
                {/* Product Image */}
                <div className={`${product.image} aspect-square w-full flex items-center justify-center relative`}>
                    <span className="text-white text-2xl font-bold opacity-50 group-hover:opacity-70 transition-opacity">
                        {product.name}
                    </span>

                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {product.isNew && (
                            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                NEW
                            </span>
                        )}
                        {product.isLimited && (
                            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                LIMITED
                            </span>
                        )}
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-primary font-semibold text-lg group-hover:text-accent transition-colors">
                            {product.name}
                        </h3>
                        <span className="text-primary font-bold text-lg">€{product.price}</span>
                    </div>

                    <p className="text-secondary text-sm capitalize mb-2">
                        {product.category}
                    </p>

                    {product.sizes && (
                        <div className="flex gap-1 flex-wrap">
                            {product.sizes.map((size) => (
                                <span
                                    key={size}
                                    className="text-xs text-secondary border border-default px-2 py-1 rounded"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
