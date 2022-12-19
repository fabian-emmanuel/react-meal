import React, {useState} from 'react';
import {Meals} from "./components/meals/Meals";
import {Cart} from "./components/cart/Cart";
import {CartContextProvider} from "./store/CartContextProvider";
import {Header} from "./components/layout/header/Header";

export const App = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    return <CartContextProvider>
        {showCart && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
            <Meals/>
        </main>
    </CartContextProvider>

}
