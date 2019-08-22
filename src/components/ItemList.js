import React from 'react';
import Item from './Item';

const ItemList = ({ items, setItems, onPlus, onMinus, }) => {
  const itemList = items.map(
    ({name, price, count, id}) => (
      <Item
        id={id}
        key={id}
        name={name}
        price={price}
        count={count}
        onPlus={onPlus}
        items={items}
        setItems={setItems}
        onMinus={onMinus}
        onRemove={onMinus}
      />
    )
  );

  return (
    <div>
      {itemList}
    </div>
  );
}


export default ItemList;