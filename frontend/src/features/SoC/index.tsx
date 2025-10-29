import useProduct from "./domain/hooks/useProduct"
import api from "./infra/services/api"
import ProductList from "./ui/ProductList"

const index = () => {

    const {products, loading} = useProduct(api);

    if(loading){

        return (<div>loading...</div>)
    }

    if(!products){

        return (<div>no products to display</div>)
    }

  return (
    <div>
        <ProductList products={products}/> 
    </div>
  )
}

export default index