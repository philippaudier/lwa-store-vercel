import { Check } from 'lucide-react';
import { pricingTiers, shippingInfo, returnPolicy } from '../data/pricing';

export function Pricing() {
    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Pricing</h1>
                    <p className="text-lg text-secondary max-w-2xl mx-auto">
                        Transparent pricing for quality products. We believe in fair prices for
                        sustainable, handcrafted items that last.
                    </p>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`bg-secondary border-2 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${tier.highlighted
                                    ? 'border-accent shadow-xl'
                                    : 'border-default'
                                }`}
                        >
                            {tier.highlighted && (
                                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                    POPULAR
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                            <p className="text-secondary text-sm mb-4">{tier.description}</p>
                            <p className="text-3xl font-bold text-accent mb-6">{tier.priceRange}</p>

                            <ul className="space-y-3">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-secondary text-sm">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Shipping */}
                    <div className="bg-secondary border border-default rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">Shipping</h3>
                        <ul className="space-y-3 text-secondary">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Standard: {shippingInfo.standard}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Express: {shippingInfo.express}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>International: {shippingInfo.international}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Returns */}
                    <div className="bg-secondary border border-default rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-primary mb-4">Returns</h3>
                        <ul className="space-y-3 text-secondary">
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{returnPolicy.period} return period</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>Condition: {returnPolicy.condition}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{returnPolicy.refund}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
