import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const { cart } = props;
    // console.log(cart[0].name)
    // const developerName = [];
    cart.map(developer => console.log(developer.name))

    let totalQuantity = 0;
    let total = 0;

    for (const developer of cart) {
        if (!developer.quantity) {
            developer.quantity = 1;
        }
        total = total + developer.salary * developer.quantity;
        totalQuantity = totalQuantity + developer.quantity;
    }

    return (
        <div>
            <p className='text-primary'><i class="fas fa-user"></i> Developer Added: {totalQuantity}</p>
            <p className='text-primary'>Total Cost: $ {total.toFixed(2)}</p>
            <ul className='mt-4 cart-image'>
                {
                    cart.map(developer => <li><img src={developer.image} alt="" />{developer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;