import { useState } from 'react';
import { lookbookItems, getAllTags } from '../data/lookbook';

export function Lookbook() {
    const [selectedTag, setSelectedTag] = useState('all');
    const tags = ['all', ...getAllTags()];

    const filteredItems = selectedTag === 'all'
        ? lookbookItems
        : lookbookItems.filter(item => item.tags.includes(selectedTag));

    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Lookbook</h1>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        Explore our latest pieces and styling inspiration. Each look showcases
                        the versatility and quality of LWA products.
                    </p>
                </div>

                {/* Tag Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-5 py-2 rounded-full font-medium transition-all ${selectedTag === tag
                                    ? 'bg-accent text-white shadow-lg'
                                    : 'bg-secondary text-primary border border-default hover:border-accent'
                                }`}
                        >
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Lookbook Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-secondary border border-default rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`${item.image} aspect-[4/5] flex items-center justify-center relative overflow-hidden`}>
                                <span className="text-white text-3xl font-bold opacity-40 group-hover:opacity-60 transition-opacity">
                                    {item.title}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-secondary mb-4">{item.caption}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-primary text-secondary px-3 py-1 rounded-full border border-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-secondary text-lg">No items found with this tag.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
