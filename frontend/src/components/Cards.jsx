import { useState } from "react"
import useProduct from "../zustand/createZustand"
import Cart from "./Cart"

function Cards() {

    const [flag, setFlag] = useState(false)

    const data = useProduct().data
    const cart = useProduct().cart 
    
    console.log(cart);

  return (
    <div className="cards-div">
    <div className="title-cards">
        <p id="exe">EXERCISE IDEA</p>
        <h1 id="title-page">Use global state to keep the cart in sync everywhere</h1>
        <p id="p-page">The products come from a JSON file, and both the shop page and the cart page read the same Zustand store.</p>
    </div>
    <div className="cards-grid">
        {data.map((product) => {
            return <Cart product={product}/>

})}
    </div>
    </div>
  )
}

export default Cards