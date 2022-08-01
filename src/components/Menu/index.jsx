import {ItemList} from "../ItemList/"
import { useState } from "react"
import "./style.css"
export function Menu(){
    const [focusW, setFocusW] = useState()
    function verify(e){
        const event = e

        // Mudar largura do foco
        setFocusW((e.target.offsetWidth / 100) * 90 +"px")


        // Mudar foco do link
        let focus = document.querySelector('.focus')
        if(focus == null){
            event.target.classList.add('focus')
        }else{
            focus.classList.remove('focus')
            event.target.classList.add('focus')
        }
    }
    return (
        <ul>
            <div className="links">
                <ItemList inicialFocus="focus" content="Home" func={(e) => verify(e)}/>
                <ItemList content="About" func={(e) => verify(e)}/>
                <ItemList content="Works" func={(e) => verify(e)}/>
                <ItemList content="Contact" func={(e) => verify(e)}/>
            </div>
            <div className="focus-bar" style={{width: focusW}}></div>
        </ul>
    )
}


