import React from 'react';
import Product from '../Product/Product';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import "../Main/Main.scss"

export default function Main(props) {
  const { products, onAdd } = props;
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Form>
        <Form.Control
          onChange={handleChange}
          placeholder="Įrašyk, ko ieškai. Pvz, apple"
          className='searchh'
          type='search'
        >
        </Form.Control>
      </Form>
      <div className='slider'>
        <div class="card">
          <div class="card_part card_part-one">
            <img className='sliderImg' src="https://bazaraat.com/assets/shop/c5f7d0209070747ca1c2c19de9d10f62f5630442.png" alt="foto" />
          </div>
          <div class="card_part card_part-two">
            <img className='sliderImg'  src="https://bazaraat.com/assets/shop/c5f7d0209070747ca1c2c19de9d10f62f5630442.png" alt="foto" />
          </div>
          <div class="card_part card_part-three">
            <img className='sliderImg'  src="https://bazaraat.com/assets/shop/c5f7d0209070747ca1c2c19de9d10f62f5630442.png" alt="foto" />
          </div>
          <div class="card_part card_part-four">
            <img className='sliderImg'  src="https://bazaraat.com/assets/shop/c5f7d0209070747ca1c2c19de9d10f62f5630442.png" alt="foto" />
          </div>
        </div>
      </div>
      <h2 className='header'>Products</h2>
      <div className='container'>
        <div className='row justify-content-center'>
          {products.filter(goods => goods.name.toLowerCase().includes(search)).map((product) => (
            <Product
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>
    </>
  );
}
