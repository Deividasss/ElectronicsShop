import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import "../Header/Header.scss"
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, } from 'react-icons/fa';

export default function Header(props) {
  const [modal, setModal] = useState(false)
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 5000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  const navigate = useNavigate();

  const openModal = () => {
    setModal(true)
  }

  const hideModal = () => {
    setModal(false)
  }
  return (
    <>
      <div>
        <div className='navigation'>
          <a onClick={() => navigate('/')}>
            <img className='logo' src="https://resi.store/img/logo-inverse.png"></img>
          </a>
          <button className="cartBtn" onClick={openModal}><FaShoppingCart /></button>
        </div>
        <Modal size="lg" show={modal} aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Button
            type="button"
            className="cartCloseBtn btn-close"
            onClick={hideModal}
            variant="danger"
          ></Button>
          <div className='modalas'>
            <h2 className='cartHeader'>----------Jūsų Prekių Krepšelis----------</h2>
            <hr></hr>
            {cartItems.length === 0 && <div className='cartHeaderEmpty'>|Prekių Krepšelis tusčias|</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-7 productName">{item.name}</div>
                <div className="col-2 text-right productPrice">
                  {item.qty} x ${item.price.toFixed(2)}
                </div>
                <div className="col-1 qntBtn">
                  <button onClick={() => onRemove(item)} className="qntBtnMinus">
                    -
                  </button>{' '}
                  <button onClick={() => onAdd(item)} className="qntBtnPlus">
                    +
                  </button>
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row itemPrice">
                  <div className='col-3'>Prekių Kaina:</div>
                  <div className='col-9'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row itemPrice">
                  <div className="col-3">Atvežimo kaina:</div>
                  <div className="col-9">
                    ${shippingPrice.toFixed(2)}
                  </div>
                </div>

                <div className="row itemPriceAmount">
                  <div className="col-3">
                    <strong>Prekių Suma:</strong>
                  </div>
                  <div className="col-9">
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
                <div >
                  <button className='buyBtn' onClick={() => alert('AČIŪ, KAD PIRKOTE!')}>
                    PRADĖTI PIRKIMĄ
                  </button>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}
