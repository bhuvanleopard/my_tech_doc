import { useEffect, useState } from "react";
import type { Product, ProductService } from "../../types";

function useProduct(service: ProductService){

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{

        let cancelled = false;
        
        service.getProducts()
        .then(data=>{

            if(!cancelled){

                setProducts(data);
                setLoading(false);
            }
        })

        return (()=>{

            cancelled=true;
        })

    },[service])

    return {products, loading}
};

export default useProduct