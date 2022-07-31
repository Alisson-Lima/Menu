export function ItemList(props){

    
    return (<li className={props.anchor} onClick={props.func}>{props.content}</li>)
}

// href={props.anchor}