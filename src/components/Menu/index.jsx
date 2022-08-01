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
            <ItemList inicialFocus="focus" content="Home" func={(e) => verify(e)}/>
            <ItemList content="About" func={(e) => verify(e)}/>
            <ItemList content="Works" func={(e) => verify(e)}/>
            <ItemList content="Contact" func={(e) => verify(e)}/>
        </ul>
    )
}


