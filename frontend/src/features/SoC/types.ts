export interface Product {

    id: string;
    name: string;
    price: number;
};

export interface ProductService {

    getProducts(): Promise<Product[]>;
};

