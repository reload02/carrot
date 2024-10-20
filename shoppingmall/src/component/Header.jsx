import './Header.css'
import { cart } from '../dataBase'

const Header = ({type,setIsModalOpen}) =>{

    const openCart = () =>{
        setIsModalOpen(true)
    }




    if ( type==='default'){
    return(
        <div className={`${type}_Header`}>
           <div className="logo">logo</div>
    <div className="searchBar">
        <input type="text" placeholder="검색어를 입력하세요" />
    </div>
    <div className="cart">
        <button onClick={openCart}>장바구니</button>
    </div>
    </div>
    )
    }else {
        return(<div>제작중</div>)
    }
}

export default Header