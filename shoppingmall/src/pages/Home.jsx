import Header from "../component/Header"
import './Home.css'
import Item from "../component/Item"
import Footer from "../component/Footer"
import { useRef, useState } from "react"
import Modal from "../component/Modal"

const Home = () =>{
    
    let [currentPage,setCurrentPage] = useState(1);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  




    const displayItems = (currentPage)=>{
       let idL = [1,2,3,4,5]
        return idL.map((i)=><Item key={i} id={i + (currentPage-1)*5}/>)
    }

    

    return (<div className="Home">
        <Header type="default" setIsModalOpen={setIsModalOpen}/>
        <div className="ItemWrapper">
            {displayItems(currentPage)}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
        <Footer setcurrentPage = {setCurrentPage}/>
        </div>
        )
}

export default Home