import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import type { CategoryFilter, SortOption } from '../types';

export function Shop() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState<SortOption>('newest');
    const categoryParam = (searchParams.get('category') || 'all') as CategoryFilter;

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = categoryParam === 'all'
            ? products
            : products.filter(p => p.category === categoryParam);

        // Sort
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            // newest: show isNew first
            return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        });

        return sorted;
    }, [categoryParam, sortBy]);

    const handleCategoryChange = (category: string) => {
        if (category === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Shop</h1>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {['all', 'clothes', 'gloves', 'keychains', 'accessories'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${categoryParam === cat
                                    ? 'bg-accent text-white'
                                    : 'bg-secondary text-primary border border-default hover:border-accent'
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="px-4 py-2 rounded-lg border border-default bg-secondary text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-secondary text-lg">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
