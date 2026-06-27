import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ setShowProductList }) {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of items in cart
  const totalCartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=600&auto=format&fit=crop",
          description: "Produces oxygen at night, improving air quality for a sound sleep.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop",
          description: "Filters formaldehyde and xylene, highly resilient and easy to grow.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=600&auto=format&fit=crop",
          description: "Elegant white blooms that filter benzene, carbon monoxide, and toxins.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=80&w=600&auto=format&fit=crop",
          description: "Adds rich green texture and acts as a natural air humidifier.",
          cost: "$14"
        },
        {
          name: "Aloe Vera",
          image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600&auto=format&fit=crop",
          description: "Purifies air and contains soothing gel with outstanding medicinal values.",
          cost: "$10"
        },
        {
          name: "English Ivy",
          image: "https://images.unsplash.com/photo-1530968033775-2c9273f0a65e?q=80&w=600&auto=format&fit=crop",
          description: "Excellent climbing vine known to reduce mold particles in indoor air.",
          cost: "$16"
        }
      ]
    },
    {
      category: "Aromatic / Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop",
          description: "Beautiful purple blooms with a calming scent that reduces stress and anxiety.",
          cost: "$20"
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?q=80&w=600&auto=format&fit=crop",
          description: "Fragrant culinary herb that boosts concentration and memory retention.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1532614338840-ab30cf10eb36?q=80&w=600&auto=format&fit=crop",
          description: "Invigorating fresh scent. Excellent for culinary uses and fresh herbal teas.",
          cost: "$10"
        },
        {
          name: "Basil",
          image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?q=80&w=600&auto=format&fit=crop",
          description: "Sweet herbal aroma, highly popular in Mediterranean and Asian cuisines.",
          cost: "$8"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1508784932257-825f8ec3546a?q=80&w=600&auto=format&fit=crop",
          description: "Exotic and sweet night-blooming fragrance that promotes relaxation.",
          cost: "$22"
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1563201515-9c595085e33d?q=80&w=600&auto=format&fit=crop",
          description: "Fresh citrusy scent that elevates mood and relieves stress naturally.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Marigold",
          image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=600&auto=format&fit=crop",
          description: "Bright blossoms that repel garden pests and mosquitoes naturally.",
          cost: "$8"
        },
        {
          name: "Citronella",
          image: "https://images.unsplash.com/photo-1587334206574-35123d463d1f?q=80&w=600&auto=format&fit=crop",
          description: "Known for its pleasant lemon fragrance that effectively repels mosquitoes.",
          cost: "$12"
        },
        {
          name: "Catnip",
          image: "https://images.unsplash.com/photo-1548546738-8509cb296e99?q=80&w=600&auto=format&fit=crop",
          description: "Contains nepetalactone, which is a highly effective natural insect repellent.",
          cost: "$10"
        },
        {
          name: "Lemongrass",
          image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?q=80&w=600&auto=format&fit=crop",
          description: "Tall aromatic grass that deters flying pests with its citronella oil content.",
          cost: "$14"
        },
        {
          name: "Chrysanthemum",
          image: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=600&auto=format&fit=crop",
          description: "Produces natural pyrethrin, widely used to repel ants, beetles, and fleas.",
          cost: "$18"
        },
        {
          name: "Fennel",
          image: "https://images.unsplash.com/photo-1522010664278-ca04273295c5?q=80&w=600&auto=format&fit=crop",
          description: "Feathery leaves that naturally repel snails, aphids, and flies.",
          cost: "$12"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowProductList(false);
  };

  return (
    <div className="product-list-page">
      {/* Dynamic Navbar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={handleHomeClick}>
          <div className="logo-container">
            <span className="logo-icon">🌿</span>
            <div className="logo-text">
              <h3>Paradise Nursery</h3>
              <p>Greenery for Life</p>
            </div>
          </div>
        </div>
        <div className="navbar-links">
          <a href="#" className="nav-link" onClick={handleHomeClick}>Home</a>
          <a href="#" className={`nav-link ${!showCart ? 'active' : ''}`} onClick={handlePlantsClick}>Plants</a>
          <a href="#" className={`nav-link cart-link ${showCart ? 'active' : ''}`} onClick={handleCartClick}>
            <div className="cart-icon-wrapper">
              <svg className="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29978 5H21L19 12H7.37671M6.29978 5L5.26945 2H3M6.29978 5L7.37671 12M7.37671 12L5.875 17H19M9 21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20C8.55228 20 9 20.4477 9 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {totalCartItemsCount > 0 && (
                <span className="cart-count-badge">{totalCartItemsCount}</span>
              )}
            </div>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="catalog-container">
          <div className="catalog-header">
            <h2>Our Collection</h2>
            <p>Explore our premium plants select from 3 functional categories</p>
          </div>
          {plantsArray.map((categoryObj, idx) => (
            <div key={idx} className="category-section">
              <h3 className="category-title">{categoryObj.category}</h3>
              <div className="plants-grid">
                {categoryObj.plants.map((plant, pIdx) => {
                  const inCart = isPlantInCart(plant.name);
                  return (
                    <div key={pIdx} className="plant-card">
                      <div className="plant-image-container">
                        <img src={plant.image} alt={plant.name} className="plant-image" />
                      </div>
                      <div className="plant-info">
                        <h4 className="plant-name">{plant.name}</h4>
                        <p className="plant-desc">{plant.description}</p>
                        <div className="plant-card-footer">
                          <span className="plant-price">{plant.cost}</span>
                          <button
                            className={`btn-add-to-cart ${inCart ? 'added' : ''}`}
                            disabled={inCart}
                            onClick={() => handleAddToCart(plant)}
                          >
                            {inCart ? 'Added' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
