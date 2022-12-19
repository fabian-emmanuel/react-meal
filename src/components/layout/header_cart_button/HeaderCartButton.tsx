import styles from './HeaderCartButton.module.scss';
import {CartIcon} from "../layout/CartIcon";
import {useContext} from "react";
import {CartContext} from "../../store/CartContext";

export const HeaderCartButton = (props:any) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item:any) => {
        return curNumber + item.amount;
    }, 0);

    return <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
}