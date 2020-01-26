import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context components
import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// font awesome SVG icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

function App() {
	// setting state name products to initital value of data from data.js which acts as a mock server
	const [products] = useState(data);

	// setting state name cart, setCart to initial value of an empty array
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const removeItem = itemId => {
		setCart(cart.filter(item => {
			return item.id !== itemId;
		}))
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
		
	);
}

export default App;
