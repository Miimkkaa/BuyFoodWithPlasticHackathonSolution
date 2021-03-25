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
          <i class="fas fa-trash-alt"></i>
        </div>
      </li>
    </>
  );
}

export default Product;
