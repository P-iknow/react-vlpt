import React, {useState} from 'react';



const Form = ({ items, setItems }) => {
  const [value, setValue] = useState("")
  const onChange = ({target}) => {
    setValue(target.value) 
  }

  const onCreate = () => {
    const [name, strPrice] = value.split("/");
    const price = Number(strPrice);
    const id = Date.now();
    setItems([...items, {name, price, count: 0, id}]);
    setValue("");
  }

  return (
    <div className="form">
      <input value={value} onChange={onChange}/>
      <button className="create-button" onClick={onCreate}>
        Add
      </button>
    </div>
  );
};

export default Form;