import { useEffect, useState } from "react"
import './CartItem.css'

const CartItem = ({id,qua})=>{

    const [item,setItem] = useState(null);

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setItem(json))
},[])

    return(
        <div className="cartItem">
           {item ? item.title : "로딩중"}
           <button>-</button>
           <button>{item ? qua : "0"}</button>
           <button>+</button>
        </div>
    )
}

export default CartItem