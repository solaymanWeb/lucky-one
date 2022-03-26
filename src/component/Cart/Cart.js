
import './Cart.css'

const Cart = (props) => {
    const {carts}=props;
    return (
        <div className='clicked-cart'>
            <img src={carts.picture} alt="" />
            <p className='laptop-name'>{carts.name}</p>
        </div>
    );
};

export default Cart;