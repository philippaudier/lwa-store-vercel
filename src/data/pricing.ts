import type { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
    {
        id: 'basics',
        name: 'Basics',
        description: 'Essential pieces for everyday wear',
        priceRange: '€10 - €40',
        features: [
            'T-shirts from €25',
            'Keychains from €10',
            'Socks & small accessories from €15',
            'Standard shipping included',
            'Quality guarantee',
        ],
    },
    {
        id: 'essentials',
        name: 'Essentials',
        description: 'Premium items for the complete wardrobe',
        priceRange: '€40 - €85',
        features: [
            'Hoodies & crewnecks from €55',
            'Pants & jeans from €65',
            'Gloves & beanies from €25',
            'Bags & belts from €40',
            'Priority shipping',
            'Extended return period',
        ],
        highlighted: true,
    },
    {
        id: 'premium',
        name: 'Premium',
        description: 'Limited edition and outerwear pieces',
        priceRange: '€85 - €150',
        features: [
            'Jackets & coats from €95',
            'Limited edition items',
            'Premium materials',
            'Numbered pieces',
            'Free express shipping',
            'Lifetime repair service',
        ],
    },
    {
        id: 'custom',
        name: 'Custom / Sur-mesure',
        description: 'Personalized pieces made to order',
        priceRange: 'On quote',
        features: [
            'Custom sizing available',
            'Personalized embroidery',
            'Material selection',
            'One-of-a-kind pieces',
            'Direct collaboration with creator',
            'Estimated 2-4 weeks production',
        ],
    },
];

// Additional pricing information
export const shippingInfo = {
    standard: 'Free for orders over €75',
    express: 'Available for €10',
    international: 'Calculated at checkout',
};

export const returnPolicy = {
    period: '30 days',
    condition: 'Unworn with tags',
    refund: 'Full refund or exchange',
};
