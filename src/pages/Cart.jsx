import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, addToCart, removeFromCart, getTotal } = useContext(CartContext);

    console.log(cart); // Verifica si el estado del carrito se está cargando

    // Función para incrementar la cantidad de un producto en el carrito
    const incrementQuantity = (pizza) => {
        addToCart(pizza);
    };

    // Función para decrementar la cantidad de un producto en el carrito
    const decrementQuantity = (pizzaId) => {
        const pizza = cart.find(item => item.id === pizzaId);
        if (pizza.quantity > 1) {
            pizza.quantity -= 1;
            removeFromCart(pizzaId); // Remueve el producto y vuelve a agregarlo con la cantidad actualizada
            addToCart(pizza);
        } else {
            removeFromCart(pizzaId);
        }
    };

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div>
                    {cart.map((pizza) => (
                        <div key={pizza.id} className="cart-item">
                            <img src={pizza.img} alt={pizza.name} />
                            <div>
                                <h4>{pizza.name}</h4>
                                <p>Precio: ${pizza.price.toFixed(2)}</p>
                                <p>Cantidad: {pizza.quantity}</p>
                                <div className="btn-group">
                                    <button onClick={() => incrementQuantity(pizza)}>+</button>
                                    <button onClick={() => decrementQuantity(pizza.id)}>-</button>
                                    <button onClick={() => removeFromCart(pizza.id)} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${getTotal().toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
