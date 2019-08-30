import React from 'react';

const BasketTemplate = ({form, total, children}) => {
  return (
    <main className="basket-template">
      <div className="title">
        <h1>장바구니</h1>
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="items-wrapper">
        { children }
      </section>
      <section className="items-wrapper">
        {total}
      </section>
    </main>
  );
};

export default BasketTemplate;