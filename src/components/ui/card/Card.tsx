import './Card.scss';
export const Card = (props:any) => {
    return <div className={'card'}>
        {props.children}
    </div>

}