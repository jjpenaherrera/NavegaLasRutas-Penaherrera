import { useAppContext } from '../../context/context';
import { GiShoppingCart } from "react-icons/gi";
import './CartWidget.css';

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <>
            <GiShoppingCart color="blue" />
            <p>{carrito.length}</p>
        </>

    );
};

export default CartWidget