import { useState } from "react"
import {BsCartFill} from "react-icons/bs"
import { Link } from "react-router-dom"


const CartBox = () => {

    const [cartCount, SetCartCount] = useState(10)

    

  return (
    <div>
        <div className="cart" >
            <Link to="cart">
                <BsCartFill size={30} color="white" />
                <span>{cartCount}</span>
            </Link>
        </div>
    </div>
  )
}

export default CartBox