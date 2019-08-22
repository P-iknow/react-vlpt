import React, { useState } from 'react';
import BasketTemplate from './components/BasketTemplate';
import Form from './components/Form'
import ItemList from './components/ItemList'
import Total from './components/Total'




const App = () => {
    const [items, setItems] = useState([]);
  
    console.log(items);
    return (
      <BasketTemplate 
        form={<Form items={items} setItems={setItems} />} 
        total={<Total items={items}/>}
      >
        <ItemList items={items} setItems={setItems} />
    
      </BasketTemplate>
      
    );
  }

export default App;