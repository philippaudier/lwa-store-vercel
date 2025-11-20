import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <section className="py-16 bg-secondary relative">
            <div className="absolute inset-0 glass opacity-50"></div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">
                    Stay Updated
                </h2>
                <p className="text-secondary mb-8">
                    Subscribe to our newsletter for new drops, exclusive offers, and behind-the-scenes content.
                </p>

                {subscribed ? (
                    <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 py-4 px-6 rounded-lg">
                        ✓ Thanks for subscribing! Check your email soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-default bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                            required
                        />
                        <Button type="submit">
                            Subscribe
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
}
