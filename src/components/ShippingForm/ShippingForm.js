import "../ShippingForm/ShippingForm.scss"
import { useState } from "react";
import { Form, Card, Button, Modal } from "react-bootstrap"

const ShippingForm = (props) => {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice > 5000 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;
    const [thanks, setThanks] = useState(false)
    const [term, setTerm] = useState({
        'FirstName': '',
        'LastName': '',
        'Tel-nr': '',
        'City': '',
        'Address': '',
        'Postal code': '',
        'Addintional info': '',
    })

    const handleChange = (e) => {
        setTerm({
            ...term,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        e.target.reset()
        console.log(term)
    }
    const hideModal = () => {
        setThanks(false)
    }
    const openModal = () => {
        setThanks(true)
    }

    return (
        <>
            <div className="container">
                <div className="shippingMain">
                    <h2 className='cartHeader2'>----------Apmokėjimas----------</h2>
                    <div className="shippingInfo">
                        <div className="shippingForm">
                            <div class="card-body">
                                <form onSubmit={submitHandler}>
                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    onChange={handleChange}
                                                    name="FirstName"
                                                    required
                                                />
                                                <label class="form-label" for="form7Example1">Vardas</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-outline">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="LastName"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label class="form-label" for="form7Example2">Pavardė</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="text"
                                            class="form-control"
                                            name="Tel-nr"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label class="form-label" for="form7Example3">Telefonas</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <select
                                            type="text"
                                            class="form-control"
                                            name="City"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option>-</option>
                                            <option>Vilnius</option>
                                            <option>Kaunas</option>
                                            <option>Klaipėda</option>
                                            <option>Šiauliai</option>
                                            <option>Panevėžys</option>
                                            <option>Akmenė</option>
                                            <option>Akmenės r.</option>
                                            <option>Alytaus r.</option>
                                            <option>Alytus</option>
                                            <option>Anyksčiai</option>
                                            <option>Anyksčių r.</option>
                                        </select>
                                        <label class="form-label" for="form7Example4">Miestas</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="Address"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label class="form-label" for="form7Example5">Adresas</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="Postal code"
                                            onChange={handleChange}
                                            required
                                        />
                                        <label class="form-label" for="form7Example6">Pašto kodas</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <textarea
                                            class="form-control"
                                            rows="4"
                                            name="Addintional info"
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                        <label class="form-label" for="form7Example7">Papildoma informacija</label>
                                    </div>
                                    <div>
                                        <button onClick={()=>{openModal()}} type="submit">PIRKTI</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="shippingItemInfo">
                            <hr></hr>
                            {cartItems.length === 0 && <div className='cartHeaderEmpty2'>|Prekių Krepšelis tusčias|</div>}
                            {cartItems.map((item) => (
                                <div key={item.id} className="row">
                                    <div className="col-7 productName2">{item.name}</div>
                                    <div className="col-2 text-right productPrice2">
                                        {item.qty} x ${item.price.toFixed(2)}
                                    </div>
                                    <div className="col-1 qntBtn2">
                                        <button onClick={() => onRemove(item)} className="qntBtnMinus2">
                                            -
                                        </button>{' '}
                                        <button onClick={() => onAdd(item)} className="qntBtnPlus2">
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <hr></hr>
                            {cartItems.length !== 0 && (
                                <>
                                    <div className="row itemPrice2">
                                        <div className='col-9'>Prekių Kaina:</div>
                                        <div className='col-3'>${itemsPrice.toFixed(2)}</div>
                                    </div>
                                    <div className="row itemPrice2">
                                        <div className="col-9">Atvežimo kaina:</div>
                                        <div className="col-3">
                                            ${shippingPrice.toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="row itemPriceAmount2">
                                        <div className="col-9">
                                            <strong>Prekių Suma:</strong>
                                        </div>
                                        <div className="col-3">
                                            <strong>${totalPrice.toFixed(2)}</strong>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {term.length !== 0 && (
                <Modal show={thanks} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <h1>{props.firstName}</h1>
                    <Button
                        type="button"
                        className="btn-close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={hideModal}
                        variant='danger'
                        style={{ float: 'right' }}
                    >
                    </Button>
                </Modal>
            )}
        </>
    )
}
export default ShippingForm