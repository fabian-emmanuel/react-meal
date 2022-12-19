import './MealItem.scss';
import {MealItemForm} from "../meal_item_form/MealItemForm";
import {CartContext} from "../../../store/CartContext";
import {useContext} from "react";

export const MealItem = ({
                             description,
                             name,
                             price,
                             id
                         }: { price: number, name: string, description: string, id: string }) => {
    const cartCtx = useContext(CartContext);
    const itemPrice = `$${price.toFixed(2)}`;

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price,
            description: description
        })
    }

    return <li className={'meal'}>
        <div>
            <h3>{name}</h3>
            <div className={'description'}>{description}</div>
            <div className={'price'}>{itemPrice}</div>
        </div>

        <div>
            <MealItemForm onAddToCart={addToCartHandler} id={id}/>
        </div>
    </li>
}