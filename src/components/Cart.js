import React from 'react'
import formatCurrency from './util';

export const Cart = (props) => {
    const {cartItems} = props;
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
            <div className="cart">
                <div className="total">
                    <div>
                        {formatCurrency(cartItems.reduce((a,b) => a + b.price * b.count,0) )}
                    </div>
                    <button className="primary button">
                        Proceed
                    </button>
                </div>
            </div>
            )}
        </div>
        </>
    )
}
 