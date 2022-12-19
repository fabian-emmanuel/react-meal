import styles from './Cart.module.scss';
import {Modal} from "../ui/modal/Modal";
import {useContext} from "react";
import {CartContext} from "../../store/CartContext";
import {CartItem} from "./cart_item/CartItem";

export const Cart = ({onHideCart}: any) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item: any) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItems = <ul className={styles['cart-items']}>
        {cartCtx.items.map(({id, name, amount, price}): any => <CartItem key={id}
                                                                         name={name}
                                                                         amount={amount}
                                                                         price={price}
                                                                         onRemove={cartItemRemoveHandler.bind(null, id)}
                                                                         onAdd={cartItemAddHandler.bind(null, {id, name, price})}/>)}
    </ul>


    return <Modal onHideCart={onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={onHideCart}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>
}