import { useContext } from "react"

import { ProductsContext } from "../../context/products.context"
import './shop.styles.scss'

import Productcard from "../../components/product-card/product-card.component copy";
const Shop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) =>(
                <Productcard 
                key= {product.id} 
                product= {product} 
                />
            ))}
        </div>
    )
}
export default Shop