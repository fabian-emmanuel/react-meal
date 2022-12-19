import {CartContext} from "./CartContext";
import {useReducer} from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0,

}
const cartReducer = (state: any, action: any) => {
    let existingCartItemIndex, existingCartItem, updatedItems, updatedTotalAmount;

    switch (action.type) {
        case 'ADD':
            existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.item.id);
            existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }

            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }

        case 'REMOVE':
            existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.id);
            existingCartItem = state.items[existingCartItemIndex];

            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter((item: any) => item.id !== action.id);
            } else {
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            updatedTotalAmount = state.totalAmount - existingCartItem.price;

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
    }
    return defaultCartState;
}

export const CartContextProvider = ({children}: { children: any }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item: any) => {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>

}