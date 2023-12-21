const CartItem = ({ product, onRemoveFromCart }) => (
    <div key={product.id} className="cart-item">
      <p>{`${product.quantity} ${product.name} Sub: $ ${product.price}`}</p>
      <button onClick={() => onRemoveFromCart(product.id)}>Eliminar del carrito</button>
    </div>
  );
  
  export default CartItem;