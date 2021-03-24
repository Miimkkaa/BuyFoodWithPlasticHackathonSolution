function Product({ id, text, amount, price, onRemove }) {
  const totalProduct = price * amount;
  return (
    <>
      <li key={id} className="listitem">
        <div>{text}</div>
        <div>{amount}</div>
        <div>${price}</div>
        <div>${totalProduct}</div>
        <div className="x_style" onClick={() => onRemove(id)}>
          X
        </div>
      </li>
    </>
  );
}

export default Product;
