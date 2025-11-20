import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary border-t border-default mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">LWA</h3>
                        <p className="text-secondary text-sm">
                            Modern, minimalist clothing and accessories. Handcrafted with care.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/shop" className="text-secondary hover:text-accent transition-colors">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="/lookbook" className="text-secondary hover:text-accent transition-colors">
                                    Lookbook
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-secondary hover:text-accent transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/pricing" className="text-secondary hover:text-accent transition-colors">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-primary font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-secondary hover:text-accent transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-secondary hover:text-accent transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-secondary hover:text-accent transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-default">
                    <p className="text-secondary text-sm text-center">
                        © {currentYear} LWA. All rights reserved. Made with care.
                    </p>
                </div>
            </div>
        </footer>
    );
}
