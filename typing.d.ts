type Customer = {
    email: string;
    name: string;
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type TrackingItem = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type OrderResponse = {
    value: Order;
}

type Order = {
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItem;
    Lat: number;
    Lng: number;
    Address: string;
    City: string;
}

declare module '@env' {
    export const API_BACK_URL: string;
}