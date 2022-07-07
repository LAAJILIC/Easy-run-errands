import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import ToBuyForm from './ToBuyForm';

function ToBuy({ products, existingProduct, removeProduct, updateQuantity }) {

    //const [newQuantity, setNewQuantity] = useState(0); //NOOOOOO, see explanation below
    const [productToUpdate, setProductToUpdate] = useState({
        id: 0,
        text: '',
        value: 0
    });
    
    const handleUpdate = newQuantity => {
       updateQuantity(productToUpdate.id, newQuantity);
       setProductToUpdate({
        id: 0,
        text: '',
        value: 0
       });
    };

    if (productToUpdate.id)
    {
       return  <ToBuyForm productToUpdate={productToUpdate} onSubmit={handleUpdate} />;
    }
 //we must attribute an index to each child as products is a list of children
  return products.map((product, index) => (
      <div className='product-container' key={index}>
      <div key={product.id} onClick={() => {existingProduct(product.id)}}>{product.text} * {product.value}</div>
        <div>
        <RiCloseCircleLine onClick={() => {removeProduct(product.id)}} className='delete-product' />
        <TiEdit onClick={() => setProductToUpdate({ id: product.id, text: product.text, value: product.value })} className='edit-product'/>
        </div>
      </div>
      //FIRST thing to do after onClick in line 16 is: to specify the product to be edited so in
      //useState we should initialize a variable that containes this state NOT a variable wit the new data
      //the variable with the new data is an input of another component AND it will be stored in the MAIN STATE which is in the ToBuyList component
  )
  )
}

export default ToBuy;