import type { Product } from '../types';

export const products: Product[] = [
    // Clothes
    {
        id: 'c1',
        name: 'Essential Tee',
        price: 35,
        category: 'clothes',
        description: 'Premium cotton t-shirt with minimalist LWA branding. Soft, breathable, and perfect for everyday wear.',
        image: 'gradient-1',
        isNew: true,
        sizes: ['S', 'M', 'L', 'XL'],
        relatedProducts: ['c2', 'c3', 'a1'],
    },
    {
        id: 'c2',
        name: 'Oversized Hoodie',
        price: 65,
        category: 'clothes',
        description: 'Heavyweight fleece hoodie with dropped shoulders. Designed for comfort and style.',
        image: 'gradient-2',
        isNew: true,
        isLimited: true,
        sizes: ['S', 'M', 'L', 'XL'],
        relatedProducts: ['c1', 'c4', 'g1'],
    },
    {
        id: 'c3',
        name: 'Cargo Pants',
        price: 75,
        category: 'clothes',
        description: 'Modern take on classic cargo pants. Multiple pockets, tapered fit, premium fabric.',
        image: 'gradient-3',
        sizes: ['S', 'M', 'L', 'XL'],
        relatedProducts: ['c1', 'c2', 'a2'],
    },
    {
        id: 'c4',
        name: 'Minimal Crewneck',
        price: 55,
        category: 'clothes',
        description: 'Clean crewneck sweatshirt with subtle LWA embroidery. Timeless and versatile.',
        image: 'gradient-4',
        sizes: ['S', 'M', 'L', 'XL'],
        relatedProducts: ['c2', 'c1', 'k1'],
    },
    {
        id: 'c5',
        name: 'Wide Leg Jeans',
        price: 85,
        category: 'clothes',
        description: 'Relaxed fit denim with a modern silhouette. Crafted from premium Japanese selvedge.',
        image: 'gradient-5',
        isLimited: true,
        sizes: ['S', 'M', 'L', 'XL'],
        relatedProducts: ['c3', 'c1', 'a3'],
    },
    {
        id: 'c6',
        name: 'Coach Jacket',
        price: 95,
        category: 'clothes',
        description: 'Water-resistant coach jacket with snap buttons. Perfect layering piece for any season.',
        image: 'gradient-6',
        isNew: true,
        sizes: ['S', 'M', 'L', 'XL'],
        relatedProducts: ['c2', 'c4', 'g2'],
    },

    // Gloves
    {
        id: 'g1',
        name: 'Leather Gloves',
        price: 45,
        category: 'gloves',
        description: 'Handcrafted leather gloves with fleece lining. Warm, durable, and stylish.',
        image: 'gradient-1',
        isNew: true,
        sizes: ['S', 'M', 'L'],
        relatedProducts: ['g2', 'c2', 'a1'],
    },
    {
        id: 'g2',
        name: 'Knit Gloves',
        price: 30,
        category: 'gloves',
        description: 'Soft merino wool gloves with touchscreen-compatible fingertips.',
        image: 'gradient-2',
        sizes: ['S', 'M', 'L'],
        relatedProducts: ['g1', 'c4', 'k2'],
    },
    {
        id: 'g3',
        name: 'Work Gloves',
        price: 55,
        category: 'gloves',
        description: 'Heavy-duty canvas and leather work gloves. Built to last.',
        image: 'gradient-3',
        isLimited: true,
        sizes: ['M', 'L', 'XL'],
        relatedProducts: ['g1', 'g2', 'a2'],
    },
    {
        id: 'g4',
        name: 'Fingerless Gloves',
        price: 25,
        category: 'gloves',
        description: 'Minimalist fingerless gloves for creative work. Comfort meets functionality.',
        image: 'gradient-4',
        sizes: ['S', 'M', 'L'],
        relatedProducts: ['g2', 'k1', 'a3'],
    },

    // Keychains
    {
        id: 'k1',
        name: 'Metal Keychain',
        price: 15,
        category: 'keychains',
        description: 'Solid brass keychain with LWA logo. Minimal and timeless.',
        image: 'gradient-5',
        isNew: true,
        relatedProducts: ['k2', 'k3', 'a1'],
    },
    {
        id: 'k2',
        name: 'Leather Tag',
        price: 18,
        category: 'keychains',
        description: 'Premium leather keychain tag with embossed branding.',
        image: 'gradient-6',
        relatedProducts: ['k1', 'k3', 'g1'],
    },
    {
        id: 'k3',
        name: 'Carabiner Clip',
        price: 12,
        category: 'keychains',
        description: 'Functional carabiner clip keychain. Durable and practical.',
        image: 'gradient-1',
        relatedProducts: ['k1', 'k2', 'a2'],
    },
    {
        id: 'k4',
        name: 'Woven Keychain',
        price: 10,
        category: 'keychains',
        description: 'Hand-woven fabric keychain in LWA brand colors.',
        image: 'gradient-2',
        isLimited: true,
        relatedProducts: ['k1', 'k2', 'a3'],
    },

    // Accessories
    {
        id: 'a1',
        name: 'Canvas Tote',
        price: 40,
        category: 'accessories',
        description: 'Heavy-duty canvas tote bag with leather handles. Perfect for daily use.',
        image: 'gradient-3',
        isNew: true,
        relatedProducts: ['a2', 'c1', 'k1'],
    },
    {
        id: 'a2',
        name: 'Beanie',
        price: 28,
        category: 'accessories',
        description: 'Soft merino wool beanie with subtle LWA patch. One size fits all.',
        image: 'gradient-4',
        relatedProducts: ['a1', 'g2', 'c2'],
    },
    {
        id: 'a3',
        name: 'Belt',
        price: 50,
        category: 'accessories',
        description: 'Full-grain leather belt with custom brass buckle. Handmade quality.',
        image: 'gradient-5',
        isLimited: true,
        relatedProducts: ['a1', 'c3', 'c5'],
    },
    {
        id: 'a4',
        name: 'Socks Pack',
        price: 22,
        category: 'accessories',
        description: 'Set of 3 premium cotton socks with LWA branding. Comfortable and durable.',
        image: 'gradient-6',
        isNew: true,
        relatedProducts: ['a2', 'c1', 'c3'],
    },
    {
        id: 'a5',
        name: 'Cap',
        price: 32,
        category: 'accessories',
        description: 'Six-panel cap with embroidered LWA logo. Adjustable strap.',
        image: 'gradient-1',
        relatedProducts: ['a2', 'c1', 'c6'],
    },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
    return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
    if (category === 'all') return products;
    return products.filter((p) => p.category === category);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
    const product = getProductById(productId);
    if (!product || !product.relatedProducts) return [];

    return product.relatedProducts
        .map((id) => getProductById(id))
        .filter((p): p is Product => p !== undefined)
        .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 2): Product[] => {
    return products.filter((p) => p.isNew).slice(0, limit);
};
