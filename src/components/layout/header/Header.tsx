import React from "react";
import styles from './Header.module.scss';
import {HeaderCartButton} from "../header_cart_button/HeaderCartButton";
import {images} from "../../../constants";

export const Header = (props:any) => {
    return <>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>

        <div className={styles['main-image']}>
            <img src={images.meal} alt="A Table Full Of Delicious Food!"/>
        </div>
    </>
}