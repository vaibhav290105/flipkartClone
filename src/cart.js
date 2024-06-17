import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
    const handleQuantityChange = (e, productId) => {
        const quantity = parseInt(e.target.value);
        if (quantity > 0) {
            updateQuantity(productId, quantity);
        }
    };

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.item1}>
                            {item.name} - ${item.price} x {item.quantity}
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(e, item.item1)}
                                min="1"
                            />
                            <button onClick={() => removeFromCart(item.item1)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;