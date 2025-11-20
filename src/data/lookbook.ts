import type { LookbookItem } from '../types';

export const lookbookItems: LookbookItem[] = [
    {
        id: 'l1',
        title: 'Urban Essentials',
        caption: 'Oversized hoodie paired with cargo pants. Comfort meets street style.',
        image: 'gradient-1',
        tags: ['Streetwear', 'Minimal'],
    },
    {
        id: 'l2',
        title: 'Winter Layers',
        caption: 'Coach jacket over crewneck. Perfect for transitional weather.',
        image: 'gradient-2',
        tags: ['Minimal', 'Layering'],
    },
    {
        id: 'l3',
        title: 'Clean Lines',
        caption: 'Essential tee with wide leg jeans. Timeless simplicity.',
        image: 'gradient-3',
        tags: ['Minimal', 'Basics'],
    },
    {
        id: 'l4',
        title: 'Work Ready',
        caption: 'Cargo pants with work gloves and canvas tote. Function first.',
        image: 'gradient-4',
        tags: ['Streetwear', 'Functional'],
    },
    {
        id: 'l5',
        title: 'Accessory Focus',
        caption: 'Leather gloves, beanie, and belt. Details matter.',
        image: 'gradient-5',
        tags: ['Accessories', 'Minimal'],
    },
    {
        id: 'l6',
        title: 'Monochrome',
        caption: 'All-black ensemble with subtle LWA branding.',
        image: 'gradient-6',
        tags: ['Minimal', 'Streetwear'],
    },
    {
        id: 'l7',
        title: 'Casual Friday',
        caption: 'Crewneck and jeans. Effortlessly cool.',
        image: 'gradient-1',
        tags: ['Basics', 'Minimal'],
    },
    {
        id: 'l8',
        title: 'Statement Pieces',
        caption: 'Limited edition hoodie with custom accessories.',
        image: 'gradient-2',
        tags: ['Streetwear', 'Limited'],
    },
    {
        id: 'l9',
        title: 'Everyday Carry',
        caption: 'Essential accessories: tote, keychain, cap.',
        image: 'gradient-3',
        tags: ['Accessories', 'Functional'],
    },
    {
        id: 'l10',
        title: 'Layered Look',
        caption: 'Multiple textures and pieces working together.',
        image: 'gradient-4',
        tags: ['Layering', 'Streetwear'],
    },
    {
        id: 'l11',
        title: 'Minimalist',
        caption: 'Less is more. Clean, simple, effective.',
        image: 'gradient-5',
        tags: ['Minimal', 'Basics'],
    },
    {
        id: 'l12',
        title: 'Full Outfit',
        caption: 'Head to toe LWA. Complete the look.',
        image: 'gradient-6',
        tags: ['Streetwear', 'Complete'],
    },
];

// Helper functions
export const getLookbookItemsByTag = (tag: string): LookbookItem[] => {
    if (tag === 'all') return lookbookItems;
    return lookbookItems.filter((item) => item.tags.includes(tag));
};

export const getAllTags = (): string[] => {
    const tags = new Set<string>();
    lookbookItems.forEach((item) => {
        item.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
};
