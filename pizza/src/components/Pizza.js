import React from 'react';
import {useState} from "react"
import "./pizza.css"

function Pizza() {

   let toppings = [
        {
          name: "Capsicum",
          price: 1.2
        },
        {
          name: "Paneer",
          price: 2.0
        },
        {
          name: "Red Paprika",
          price: 2.5
        },
        {
          name: "Onions",
          price: 3.0
        },
        {
          name: "Extra Cheese",
          price: 3.5
        },
        {
          name: "Baby Corns",
          price: 3.0
        },
        {
          name: "Mushroom",
          price: 2.0
        }
      ];
      



    const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
      );
    
      const [total, setTotal] = useState(0);
    
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    
        const totalPrice = updatedCheckedState.reduce(
          (sum, currentState, index) => {
            if (currentState === true) {
              return sum + toppings[index].price;
            }
            return sum;
          },
          0
        );
    
        setTotal(totalPrice);
      };

  return (
    <div>
<header>
            <h1><span aria-hidden>🍕</span>Pizza Builder<span aria-hidden>🍕</span></h1>
        </header>

        <div className='pizza-container'>
            <div className='pizza'>
                
            </div>
        </div>

        <div className="toppingsbox">
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
        </div>
  )
}

export default Pizza