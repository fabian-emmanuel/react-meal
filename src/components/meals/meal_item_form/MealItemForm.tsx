import './MealItemForm.scss';
import {Input} from "../../ui/input/Input";
import {useRef, useState} from "react";

export const MealItemForm = ({id, onAddToCart}: { id: string, onAddToCart:any}) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: any) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current!.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmountNumber);

    }


    return <form className={'form'} onSubmit={submitHandler}>
        <Input ref={amountInputRef}
               label={'Amount'}
               input={{
                   id: 'amount_' + id,
                   type: 'number',
                   min: '1',
                   max: '5',
                   step: '1',
                   defaultValue: '1'
               }}/>
        <button type={'submit'}>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>

}