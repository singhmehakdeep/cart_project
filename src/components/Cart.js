import React, { useState } from 'react'
import formatCurrency from './util';

export const Cart = (props) => {
    const {cartItems} = props;
    const [state,setState] = useState({
        name:"",
        email:"",
        address:"",
        showCheckOut:false
    })

    const createOrder = (e) => {
        e.preventDefault();
        const order={
            name:state.name,
            email:state.email,
            address:state.address,
            cartItems:cartItems,
        }
        props.createOrder(order);

    }

    const handleChange =(e) => {
        setState({...state,[e.target.name]:e.target.value})

    }

    
    return (
        <>
        <div>
            {cartItems.length === 0 ? <div className="cart cart-header">Cart is Empty</div>
            :
            <div className="cart cart-header">You have {cartItems.length} in the cart</div>
            }
        </div>
        <div>
            <div className="cart">
                <ul className="cart-items">
                    {cartItems.map((item)=> (
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={cartItems.title}></img>
                            </div>
                            <div>
                                <div>{item.title}</div>
                    <div className="right">{formatCurrency(item.price)} x {item.count} {" "}</div>
                                <button onClick={() => props.removeFromCart(item)}>
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !==0 && (
            <div>
            <div className="cart">
                <div className="total">
                    <div>
                        {formatCurrency(cartItems.reduce((a,b) => a + b.price * b.count,0) )}
                    </div>
                    <button className="primary button" onClick={() => setState({showCheckOut:true})}>
                        Proceed
                    </button>
                </div>
            </div>
            {state.showCheckOut && (
                <div className="cart">
                    <form onSubmit={createOrder}>
                        <ul className="form-container">
                            <li>
                                <label>Email</label>
                                <input name="email" type="email" required onChange={handleChange}></input>
                            </li>
                            <li>
                                <label>Name</label>
                                <input name="name" type="text" required onChange={handleChange}></input>
                            </li>
                            <li>
                                <label>Address</label>
                                <input name="address" type="text" required onChange={handleChange}></input>
                            </li>
                            <li>
                                <button className="button primary" type="submit">Checkout</button>
                            </li>
                        </ul>
                    </form>

                </div>
            )}
            </div>
            )}
        </div>
        </>
    )
}
 