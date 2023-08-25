import React,{useState} from 'react';
const Cart = () =>{
    const [items,setItems] = useState([]);

    const addtocart = (item) => {
        setItems([...items,item]);
    };
    const removeFromCart = (index) =>{
        const updatedItems = [...items];
        updatedItems.splice(index,1);
        setItems(updatedItems);
    };

  return (
    <div>
        <h2 id="name">Shopping Cart</h2>
        <ul>
            {items.map((item,index)=>(
                <li key ={index}>
                    {item}
                    <button onClick={()=> removeFromCart(index)}>Remove</button>
                </li>
            ))}
        </ul>
        <button onClick={()=> addtocart("New Item")}>Add to Cart</button>
    </div>
  );
  };

export default Cart;