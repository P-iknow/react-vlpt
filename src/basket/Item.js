
import React from 'react';


const Item = ({ items, setItems, name, price, count, id }) => {

  const onPlus = () => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item.count++
      }
      return item;
    })
    setItems(updatedItems)
  }

  const onMinus = () => {
    const updatedItems = items.map(item => {
      if (item.id === id && item.count > 0 ) {
        item.count--
      }
      return item;
    })
    setItems(updatedItems)
  }

  const onRemove = () => {
    const updatedItems = items.filter(item => {
      return item.id !== id 
    })
    setItems(updatedItems);

  }

  return (
    <div className="itemWrapper">
      <span className="itemName">{`${name} (${String(price)}): `}</span>
      <span className="itemCount">{`${String(count)} `}</span>
      <button className="plus" onClick={() => onPlus()}>+1</button>
      <button className="minus"onClick={() => onMinus()}>-1</button>
      <button className="remove"onClick={() => onRemove()}>삭제</button>
    </div>
  );
}


export default Item;