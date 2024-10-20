import './Item.css'
import {Items} from '../dataBase'
import {cart} from '../dataBase'


const Item = ({id}) =>{
    const addCart = () =>{
        console.log("이랬는데 ")
        console.log(cart)
        let isExist = false
        setTimeout(() => {
            cart.products.map((i)=>{
                if(Number(i.productId) === Number(id)){
                    isExist = true
                    i.quantity++;
                }
                })
                if(!isExist){
                    console.log("??")
                    cart.products.push(
                        {productId: id, quantity: 1}
                    )
                }
                console.log("요래댐 ")
            console.log(cart)
        }, 3000);
        
            
    }
    if (Items[id-1])
    return (
        <div className="Item">
            <div>
            {Items[id-1].id}
                 {Items[id-1].title}
            </div>
            <div>
                  {Items[id-1].price}$
            </div>
            <img src={Items[id-1].image} className='itemImage'/>
            <button onClick={addCart}>장바구니</button>
            <button>구매하기</button>
            
        </div>
    )
    else
    return (
        <div className="Item">
            <div>
                 준비중입니다
            </div>
            <div>
                  0.0$
            </div>
            <button className='itemImage'>준비중입니다.</button>
            
        </div>
    )
}

export default Item