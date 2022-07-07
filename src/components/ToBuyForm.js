import React, { useState } from 'react'

function ToBuyForm(props) {

    const [input, setInput] = useState(props.productToUpdate ? props.productToUpdate.text : '');
    const [nb, setNb] = useState(props.productToUpdate ? props.productToUpdate.value : 0);

    const [id, setId] = useState(1);

    const generateId = () => {
        setId(id + 1);
        return id;
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({

            id: generateId(),
            text: input,
            value: nb
        })

        setInput('');
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add an object to buy' value={input} className='form-input' onChange={e => setInput(e.target.value)} />
      <input type='text' placeholder='How many ?' value={nb} className='form-input' onChange={e => setNb(e.target.value)} />

      <button className='form-button'>Add</button>
    </form>
  )
}

export default ToBuyForm;