// Product Types
export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'clothes' | 'gloves' | 'keychains' | 'accessories';
    description: string;
    image: string; // gradient class name or image URL
    isNew?: boolean;
    isLimited?: boolean;
    sizes?: string[];
    relatedProducts?: string[]; // IDs of related products
}

// Lookbook Types
export interface LookbookItem {
    id: string;
    title: string;
    caption: string;
    image: string; // gradient class name or image URL
    tags: string[];
}

// Pricing Types
export interface PricingTier {
    id: string;
    name: string;
    description: string;
    priceRange: string;
    features: string[];
    highlighted?: boolean;
}

// Cart Types (for future use)
export interface CartItem {
    product: Product;
    quantity: number;
    selectedSize?: string;
}

// Filter & Sort Types
export type SortOption = 'price-low' | 'price-high' | 'newest';
export type CategoryFilter = 'all' | Product['category'];
