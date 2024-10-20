import React, { useEffect } from 'react';
import './Modal.css';
import { Items , cart } from '../dataBase';
import CartItem from './CartItem';

const Modal = ({ isOpen, onClose, children }) => {




  if (!isOpen) return null;



  const displayItems = ()=>{
    let idList = cart.products.map((i)=>[i.productId,i.quantity])
     return idList.map((i)=><CartItem key = {i[0]} id = {i[0]} qua = {i[1]}/>)
    
 }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {displayItems()}
      </div>
    </div>
  );
};

export default Modal;