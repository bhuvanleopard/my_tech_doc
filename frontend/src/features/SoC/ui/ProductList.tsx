import type { Product } from "../types"

const ProductList = ({products}:{products:Product[]}) => {
  
    return (

        <ul>
            {products.map((p)=>(
                <li key={p.id}>
                    {p.name}: {p.price.toFixed(2)}
                </li>
            ))}
        </ul>
  ) 
}

export default ProductList