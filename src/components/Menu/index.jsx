import {ItemList} from "../ItemList/"
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
            <ItemList anchor="" content="Home" func={(e) => verify(e)}/>
            <ItemList anchor="" content="About" func={(e) => verify(e)}/>
            <ItemList anchor="" content="Works" func={(e) => verify(e)}/>
            <ItemList anchor="" content="Contact" func={(e) => verify(e)}/>
        </ul>
    )
}


