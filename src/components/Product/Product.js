import React from 'react';
import "../Product/Product.scss"
import { FaStar, FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Product(props) {
  const { product, onAdd } = props;
  const [modal, setModal] = useState(false)


  const openModal = () => {
    setModal(true)
  }

  const hideModal = () => {
    setModal(false)
  }

  const success = () => {
    NotificationManager.success('Prekė sėkmingai pridėta į krepšelį!', '---------- ResiStore ----------');
  }

  return (
    <>
      <div class="col-md-3 ">
        <div class="product-grid">
          <div class="product-image">
            <a onClick={openModal} class="image">
              <img class="pic-1" src={product.image} />
            </a>
            <span class="product-hot-label">Hot</span>
            <ul class="product-links">
              <li><a data-tip="Add to Wishlist"><i>{<FaHeart />}</i></a></li>
              <li><a onClick={() => {onAdd(product); success()}} data-tip="Add To Cart"><i>{<FaShoppingCart />}</i></a></li>
              <li><a href={product.image} data-tip="Quick View"><i>{<FaSearch />}</i></a></li>
            </ul>
          </div>
          <div class="product-content">
            <h3 className="product-title"><a>{product.name}</a></h3>
            <ul className="rating">
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
              <li><FaStar /></li>
            </ul>
            <div class="price">{product.price}$<span>/vnt</span></div>
          </div>
        </div>
      </div>

      <Modal className="itemModal" show={modal} aria-labelledby="contained-modal-title-vcenter" centered>
        <div class="lightbox-blanket">
          <div class="pop-up-container">
            <div class="pop-up-container-vertical">
              <div class="pop-up-wrapper">
                <Button className="itemModalBtn" variant="close" onClick={hideModal}></Button>
                <div class="product-details">
                  <div class="product-left">
                    <div class="product-info">
                      <div>
                        <img class="InfoFoto" src={product.image} />
                      </div>
                      <div class="product-title">
                        {product.name}
                      </div>
                      <div class="product-price">
                        {product.price}<span class="product-price-cents">/vnt</span>
                      </div>
                    </div>
                  </div>
                  <div class="product-right">
                    <div class="product-description">
                      {product.description}
                    </div>
                    <div class="product-rating">
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <div class="product-rating-details">(3.1 - <span class="rating-count">1203</span> reviews)
                      </div>
                    </div>
                  </div>
                  <div class="product-bottom">
                    <div class="product-checkout">
                      <div class="product-checkout-total">
                        <div class="product-checkout-total-amount">
                          {product.price}$/vnt.
                        </div>
                      </div>
                    </div>
                    <div class="product-checkout-actions">
                      <Button onClick={() => { onAdd(product); hideModal(); success() }} className="addToCartBtn" variant="dark">Į KREPŠELĮ</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
