import { Heart, Sparkles, Package } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Quality',
        description: 'Every piece is crafted with premium materials and attention to detail.',
    },
    {
        icon: Sparkles,
        title: 'Creativity',
        description: 'Unique designs that stand out while remaining timeless and versatile.',
    },
    {
        icon: Package,
        title: 'Small Batch',
        description: 'Limited production runs ensure exclusivity and reduce waste.',
    },
];

export function About() {
    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
                    About LWA
                </h1>

                {/* Story */}
                <div className="prose prose-lg max-w-none mb-16">
                    <p className="text-lg text-secondary leading-relaxed mb-6">
                        LWA was born from a simple idea: create clothing and accessories that matter.
                        In a world of fast fashion and disposable trends, we wanted to build something different—
                        pieces that last, designs that endure, and a brand that stands for quality over quantity.
                    </p>
                    <p className="text-lg text-secondary leading-relaxed mb-6">
                        Every item we make is thoughtfully designed and carefully crafted. We work with premium
                        materials, skilled artisans, and a commitment to sustainability. Our collections are small,
                        intentional, and made to be worn for years, not seasons.
                    </p>
                    <p className="text-lg text-secondary leading-relaxed">
                        From our signature gloves to our minimalist clothing line, each piece reflects our values:
                        simplicity, durability, and timeless style. We're not chasing trends—we're building a wardrobe
                        that works for you, today and tomorrow.
                    </p>
                </div>

                {/* What We Make */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-6">What We Make</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-primary mb-3">Clothes</h3>
                            <p className="text-secondary">
                                Essential tees, hoodies, pants, and outerwear designed for everyday wear.
                                Clean lines, perfect fits, premium fabrics.
                            </p>
                        </div>
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-primary mb-3">Gloves</h3>
                            <p className="text-secondary">
                                Handcrafted leather and knit gloves. Functional, warm, and stylish.
                                Our signature product.
                            </p>
                        </div>
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-primary mb-3">Keychains</h3>
                            <p className="text-secondary">
                                Small details that matter. Metal, leather, and fabric keychains
                                that add character to your everyday carry.
                            </p>
                        </div>
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-primary mb-3">Accessories</h3>
                            <p className="text-secondary">
                                Bags, beanies, belts, and more. Thoughtful additions to complete
                                your look.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div key={value.title} className="text-center">
                                    <div className="bg-accent w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                                    <p className="text-secondary">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
