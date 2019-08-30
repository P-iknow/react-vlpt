import React, {useState} from 'react';

const isNameSlashPrice = (str) => {
  return /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/.test(str)
} 

const Form = ({ items, setItems }) => {
  const [value, setValue] = useState("")
  const onChange = ({target}) => {
    setValue(target.value) 
  }

  const onCreate = () => {
    if(!isNameSlashPrice(value)) {
      alert("name/price ex) banana/1000 형식으로 입력하세요")
      return null;
    }
    const [name, strPrice] = value.split("/");
    const price = Number(strPrice);
    const id = Date.now();
    setItems([...items, {name, price, count: 0, id}]);
    setValue("");
  }

  return (
    <div className="form">
      <input value={value} onChange={onChange} placeHolder="name/price"/>
      <button className="create-button" onClick={onCreate}>
        Add
      </button>
    </div>
  );
};

export default Form;