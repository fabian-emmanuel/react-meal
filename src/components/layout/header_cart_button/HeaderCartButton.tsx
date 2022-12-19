import styles from './HeaderCartButton.module.scss';
import {CartIcon} from "../CartIcon";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../store/CartContext";

export const HeaderCartButton = (props: any) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item: any) => {
        return curNumber + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length < 1) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])


    return <button className={`${styles.button} ${btnIsHighlighted ? styles.bump : ''}`} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
}