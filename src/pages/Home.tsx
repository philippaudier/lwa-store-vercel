import { Hero } from '../components/home/Hero';
import { Categories } from '../components/home/Categories';
import { Newsletter } from '../components/home/Newsletter';

export function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <Categories />

            {/* About Snippet */}
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                        About LWA
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed mb-4">
                        LWA is a modern, minimalist brand creating high-quality clothing and accessories
                        with intention. Every piece is thoughtfully designed and crafted to last.
                    </p>
                    <p className="text-lg text-secondary leading-relaxed">
                        We believe in slow fashion, small batches, and timeless style. No trends, no waste—just
                        pieces you'll love for years.
                    </p>
                </div>
            </section>

            <Newsletter />
        </div>
    );
}
