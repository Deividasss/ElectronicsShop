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
      <div className='container'>
        <div className='main'>
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
                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/Apple-01-Macbook-Air-M2-PIRKTI-976x379_1.jpg" alt="foto" />
              </div>
              <div class="card_part card_part-two">
                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/Apple-Geriausi_-pasi_lym_-dienos-LIEPA-976x379.jpg" alt="foto" />
              </div>
              <div class="card_part card_part-three">
                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/C06-Liepa-Samsung-GW4-_-dovana-976x379.jpg" alt="foto" />
              </div>
              <div class="card_part card_part-four">
                <img className='sliderImg' src="https://picfit.topocentras.lt/xcdn-cgi/image/fit=contain,format=auto,quality=80/cdn-cgi/image/fit=contain,quality=80,format=auto/media/aw_rbslider/slides/Apple-Geriausi_-pasi_lym_-dienos-LIEPA-976x379.jpg" alt="foto" />
              </div>
            </div>
          </div>
          <h2 className='header'>---------------| ResiStore |---------------</h2>
          <div className="logos2">
            <img className="appleLogo2" src="https://logolook.net/wp-content/uploads/2021/06/Apple-Logo.svg"></img>
            <img className="samsungLogo2" src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png"></img>
            <img className="lenovoLogo2" src="https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1.png"></img>
            <img className="asusLogo2" src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png"></img>
            <img className="xboxLogo2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/1280px-XBOX_logo_2012.svg.png"></img>
          </div>
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
        </div>
      </div>
    </>
  );
}
