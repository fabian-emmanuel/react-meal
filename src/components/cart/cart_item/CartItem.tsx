import styles from './CartItem.module.scss';

export const CartItem = ({name,amount,onRemove,onAdd}:any) => {
    const price = `$${amount.toFixed(2)}`;

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.amount}>x {amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
}