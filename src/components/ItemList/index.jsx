export function ItemList(props){
    return (<li className={props.class} onClick={props.func}><a href={props.anchor} className={props.inicialFocus} onClick={(e) => e.preventDefault()}>{props.content}</a></li>)
}
