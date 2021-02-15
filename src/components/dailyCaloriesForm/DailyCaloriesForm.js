import React, { useState, useEffect } from 'react';

const DiaryAddProductForm = () => {
  const [state, setState] = useState({
    date: '',
    product: '',
    gram: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (


    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="date" name="date" value={state.date} onChange={handleChange} />
        </label>
        <label>
          <input type="text" name="product" value={state.product} onChange={handleChange} placeholder='Введите название продукта' />
        </label>
        <label>
          <input type="number" name="gram" value={state.gram} onChange={handleChange} placeholder='Граммы' />
        </label>
        <button type='submit' >Add</button>
      </form>
    </div>
  )
}

export default DiaryAddProductForm