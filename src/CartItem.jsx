import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse price string to number
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr.replace(/[$,]/g, ''));
  };

  // Calculate total amount for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (parsePrice(item.cost) * item.quantity), 0).toFixed(2);
  };

  // Calculate total cost for a specific item (subtotal)
  const calculateTotalCost = (item) => {
    return (parsePrice(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert("Checkout functionality is Coming Soon!");
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Explore our premium plants and add some green friends to your home!</p>
          <button className="btn-continue-shopping" onClick={onContinueShopping}>
            Shop Plants
          </button>
        </div>
      ) : (
        <div className="cart-content-wrapper">
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item-card">
                <div className="cart-item-img-container">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <h4>{item.name}</h4>
                    <span className="cart-item-unit-price">{item.cost} each</span>
                  </div>
                  <p className="cart-item-desc">{item.description}</p>
                  
                  <div className="cart-item-controls">
                    <div className="quantity-adjuster">
                      <button className="btn-qty" onClick={() => handleDecrement(item)}>-</button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button className="btn-qty" onClick={() => handleIncrement(item)}>+</button>
                    </div>
                    
                    <span className="cart-item-subtotal">Subtotal: ${calculateTotalCost(item)}</span>
                    
                    <button className="btn-remove" onClick={() => handleRemove(item)} title="Remove Item">
                      <svg viewBox="0 0 24 24" className="trash-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86725 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items Total:</span>
              <span>${calculateTotalAmount()}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Delivery:</span>
              <span className="free-shipping">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>${calculateTotalAmount()}</span>
            </div>
            
            <div className="cart-actions">
              <button className="btn-checkout" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              <button className="btn-secondary-continue" onClick={onContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
