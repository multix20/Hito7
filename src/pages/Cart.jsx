import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; // Importar el UserContext

const Cart = () => {
    const { cart, addToCart, removeFromCart, getTotal } = useContext(CartContext);
    const { token } = useContext(UserContext); // Obtener el token desde UserContext

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
                    
                    {/* Botón de pagar que se deshabilita si el token es false */}
                    <button 
                        className="btn-pay"  // Cambiar la clase del botón a btn-pay
                        onClick={() => alert('Procediendo al pago')} 
                        disabled={!token}  // Deshabilitar si el token es false
                    >
                        Pagar
                    </button>

                    {/* Mensaje si el botón está deshabilitado */}
                    {!token && <p style={{ color: 'red' }}>Inicia sesión para poder realizar el pago.</p>}
                </div>
            )}
        </div>
    );
};

export default Cart;
