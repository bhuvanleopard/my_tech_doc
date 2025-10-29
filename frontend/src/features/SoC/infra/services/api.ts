import type { ProductService } from "../../types";

const api: ProductService ={

    async getProducts() {
        
        const res = await fetch("/api/products");
        return res.json();
    },
};

export default api