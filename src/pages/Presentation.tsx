import { User, Lightbulb, Target, Award, Package, Heart } from 'lucide-react';

export function Presentation() {
    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
                    The Story Behind LWA
                </h1>

                {/* Who is behind LWA */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary">Who's Behind LWA?</h2>
                    </div>
                    <div className="bg-secondary border border-default rounded-xl p-8">
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            LWA was founded by a designer and craftsperson who grew tired of the fast fashion cycle.
                            After years working in the industry, they decided to create something different—a brand
                            that prioritizes quality, sustainability, and timeless design.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            What started as a small collection of handmade gloves has grown into a full line of
                            clothing and accessories. But the core philosophy remains the same: make things that
                            last, design with intention, and never compromise on quality.
                        </p>
                    </div>
                </section>

                {/* What LWA Makes */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center">
                            <Lightbulb className="w-6 h-6 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary">What LWA Creates</h2>
                    </div>
                    <div className="bg-secondary border border-default rounded-xl p-8">
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            Every piece in the LWA collection is designed to be versatile, durable, and timeless.
                            We focus on essential items—the kind you reach for every day—and make them better.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            Our clothing line includes t-shirts, hoodies, pants, and outerwear in neutral colors
                            and clean silhouettes. Our accessories range from handcrafted leather gloves to
                            minimalist keychains and bags.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            Many items are made in small batches or even custom-made to order. This approach
                            reduces waste, ensures quality control, and makes each piece feel special.
                        </p>
                    </div>
                </section>

                {/* Values Grid */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-primary">Our Principles</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Award className="w-6 h-6 text-accent" />
                                <h3 className="text-xl font-semibold text-primary">Quality First</h3>
                            </div>
                            <p className="text-secondary">
                                We use premium materials and work with skilled artisans. Every stitch,
                                every detail is intentional.
                            </p>
                        </div>
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Lightbulb className="w-6 h-6 text-accent" />
                                <h3 className="text-xl font-semibold text-primary">Creative Spirit</h3>
                            </div>
                            <p className="text-secondary">
                                We're not afraid to experiment, but we never sacrifice functionality
                                for style.
                            </p>
                        </div>
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Package className="w-6 h-6 text-accent" />
                                <h3 className="text-xl font-semibold text-primary">Small Batch Production</h3>
                            </div>
                            <p className="text-secondary">
                                Limited runs mean less waste, more exclusivity, and better quality control.
                            </p>
                        </div>
                        <div className="bg-secondary border border-default rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Heart className="w-6 h-6 text-accent" />
                                <h3 className="text-xl font-semibold text-primary">Sustainability</h3>
                            </div>
                            <p className="text-secondary">
                                We believe in slow fashion. Make less, make it better, make it last.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
