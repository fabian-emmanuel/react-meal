import './Modal.scss';
import ReactDOM from "react-dom";

const Backdrop = (props:any) => {
    return <div className={'backdrop'} onClick={props.onHideCart}/>
}
const ModalOverlay = ({children}: { children: any }) => {
    return <div className={'modal'}>
        <div className={'content'}>{children}</div>
    </div>
}
export const Modal = ({children, onHideCart}: { children: any, onHideCart:()=>{} }) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart}/>, document.getElementById('overlays')!)}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays')!)}
    </>

}