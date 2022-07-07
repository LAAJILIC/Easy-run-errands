import React, { useState } from 'react';
import ToBuy from './ToBuy';
import ToBuyForm from './ToBuyForm';

function ToBuyList() {

    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        console.log(Number(product.value));
        //typeof Number(product.value);
     if (!product.text || !Number(product.value) || product.value <= 0) { return; }
     const newProducts = [product, ...products];
     setProducts(newProducts);
    console.log(products);
    };

    const notRepeatedProduct = id => {
      let checkedProducts = products.map(item =>  {
        if(item.id === id) { item.isComplete = !item.isComplete; }
        return item;
       });
       setProducts(checkedProducts);
    };
    //notRepeatedProduct aims to not check this product again once we did it.
    //First : item.isComplete = false: not yet checked
    //Last: item.isComplete = true: checked that it is existing


    const editProduct = (sameId, newValue)=> {

     const editedProducts = products.map(product => (product.id === sameId ? newValue : product ));
     setProducts(editedProducts);
    }
  
    const deleteProduct = id => {
        const sortedProducts = [...products].filter(product => product.id !== id );
        setProducts(sortedProducts);
        //console.log(products);
    };

  return (
    <div>
     <ToBuyForm onSubmit={addProduct}/>
     <ToBuy products={products} existingProduct={notRepeatedProduct} removeProduct={deleteProduct} updateQuantity={editProduct} />
    </div>
  )
}

export default ToBuyList;