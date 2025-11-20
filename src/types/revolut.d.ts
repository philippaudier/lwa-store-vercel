// Revolut SDK TypeScript definitions

declare global {
    interface Window {
        RevolutCheckout: (publicKey: string, mode?: 'prod' | 'sandbox') => Promise<RevolutCheckoutInstance>;
    }
}

export interface RevolutCheckoutInstance {
    payWithPopup: (options: PaymentOptions) => Promise<PaymentResult>;
    createCardField: (options: CardFieldOptions) => CardField;
    destroy: () => void;
}

export interface PaymentOptions {
    amount: number;
    currency: string;
    email?: string;
    name?: string;
    phone?: string;
    billingAddress?: Address;
    shippingAddress?: Address;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
    onCancel?: () => void;
}

export interface Address {
    countryCode: string;
    region?: string;
    city?: string;
    postcode?: string;
    streetLine1?: string;
    streetLine2?: string;
}

export interface PaymentResult {
    orderId: string;
    publicId: string;
    state: 'COMPLETED' | 'PENDING' | 'FAILED';
}

export interface CardField {
    mount: (selector: string) => void;
    unmount: () => void;
    validate: () => Promise<boolean>;
}

export interface CardFieldOptions {
    target: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

export { };
