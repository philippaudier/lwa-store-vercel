import { Link } from 'react-router-dom';
import { Shirt, Hand, Key, Sparkles } from 'lucide-react';

const categories = [
    {
        name: 'Clothes',
        icon: Shirt,
        gradient: 'gradient-1',
        link: '/shop?category=clothes',
    },
    {
        name: 'Gloves',
        icon: Hand,
        gradient: 'gradient-2',
        link: '/shop?category=gloves',
    },
    {
        name: 'Keychains',
        icon: Key,
        gradient: 'gradient-3',
        link: '/shop?category=keychains',
    },
    {
        name: 'Accessories',
        icon: Sparkles,
        gradient: 'gradient-4',
        link: '/shop?category=accessories',
    },
];

export function Categories() {
    return (
        <section className="py-16 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                    Shop by Category
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.name}
                                to={category.link}
                                className="group"
                            >
                                <div className="bg-secondary border border-default rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className={`${category.gradient} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                                        {category.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
