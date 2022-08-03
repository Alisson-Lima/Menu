import {ItemList} from "../ItemList/"
import { useState } from "react"
import "./style.css"
export function Menu(){
    const [focusW, setFocusW] = useState()
    const [translateX, setTranslateX] = useState()
    function verify(e){
        const event = e

        let n1 = event.target.offsetWidth
        let n2 = (event.target.offsetWidth / 100) * 90
        console.log(n1 - n2)
        const move = event.target.offsetLeft + ((n1 - n2) / 2) + "px"
        // Mover focus para o elemento
        setTranslateX(move)
        // Mudar largura do foco
        setFocusW(n2 + "px")
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
                <div className="focus-bar" style={{width: focusW, left: translateX}}></div>
            </div>
        </ul>
    )
}


