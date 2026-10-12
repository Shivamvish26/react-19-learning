import { useState } from "react"

export default function Derived(){

    const [price, setPrice] = useState(100)
    const [quantity, setQuantity] = useState(0)

    const totalPrice = price * quantity

    return(
        <div>
            Derived State
            <h3>Price : {price}</h3>
            <h3>Quantity :  {quantity}</h3>
            <h3>Total Price :  {totalPrice}</h3>

            <button onClick={()=>setQuantity(quantity + 1)}>Add Quantity</button>
        </div>
    )
}