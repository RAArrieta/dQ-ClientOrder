import "./CartItem.css"

const CartItem = ({ product, onRemoveFromCart }) => (
    <div key={product.id} className="cart-item products-order">
      <p className="descriptionOrder">{`${product.quantity}    ${product.name}    Sub: $${product.price*product.quantity}`}</p>
      <button onClick={() => onRemoveFromCart(product.id)}>Quitar</button>
    </div>
  );
  
  export default CartItem;