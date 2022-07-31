// import {ItemList} from "../ItemList/"
import "./style.css"
export function Menu(){
    function verify(e){
        let focus = document.querySelector('.focus')
        if(focus == null){
            e.target.classList.add('focus')
        }else{
            focus.classList.remove('focus')
            e.target.classList.add('focus')
        }
    }
    return (
        <ul>
            <li onClick={(e) => verify(e)}>Home</li>
            <li onClick={(e) => verify(e)}>About</li>
            <li onClick={(e) => verify(e)}>Works</li>
            <li onClick={(e) => verify(e)}>Contact</li>
        </ul>
    )
}


{/* <ItemList anchor="" content="About" onClick={verify}/>
<ItemList anchor="" content="Works" onClick={verify}/>
<ItemList anchor="" content="Contact" onClick={verify}/> */}