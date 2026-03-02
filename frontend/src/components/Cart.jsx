import { useState } from "react"
import useProduct from "../zustand/createZustand"

function Cart(props) {

    const { product } = props

    const [flag, setFlag] = useState(false)
    const removeItem = useProduct().removeItem
    const addItem = useProduct().addItem
    
    function addToCart() {}
    
  return (
    <div className="cart-div" id={product.id}>
        <div className="image">{product.image}</div>
        <div>
            <p className="category">{product.category}</p>
            <h1 className="name">{product.name}</h1>
            <p className="descr">{product.description}</p>
            <div className="pays">
                <p className="price">${product.price}</p>
                <p>{flag && 'In cart' || 'Not in cart'}</p>
            </div>
            <button onClick={addToCart}>{flag && 'Remove from cart' || 'Add to cart'}</button>
        </div>
    </div> 
    )
}

export default Cart