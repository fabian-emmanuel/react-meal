import './Input.scss';
import {forwardRef} from "react";

export const Input = forwardRef(({input, label}: { input: any, label: string },ref) => {
    return <div className={'input'}>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} {...(input)}/>
    </div>
})