import React from "react";
import styles from './Header.module.scss';
import {images} from '../../constants';
import {HeaderCartButton} from "../button/HeaderCartButton";

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