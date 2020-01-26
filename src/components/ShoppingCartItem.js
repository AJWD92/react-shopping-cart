import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

// adding font awesome SVG icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Item = props => {
	
	const {removeItem} = useContext(CartContext)

	return (
		<div key={props.id} className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />
			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={(e) => removeItem(props.id)}><FontAwesomeIcon className='faicons' icon='trash'></FontAwesomeIcon>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
