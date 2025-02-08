import { useState } from 'react'
import me from '../../assets/me.png'
import meOutput from '../../assets/meOutput.png'
export function Hero(){
    const [imageSrc, setImageSrc] = useState(me);
    return(
       <div className="grid grid-cols-2">
            <div>
                <div>Build.</div>
                <div>Break.</div>
                <div>Improve.</div>
                <div>Repeat.</div>
                <div>Crafting pixel-perfect, code-  precise, scalable web application.</div>
            </div>
            <div onMouseEnter={()=>{setImageSrc(meOutput)}}
                onMouseLeave={()=>{setImageSrc(me)}}>
                <img src={imageSrc}/>
            </div> 
        </div>
    )
}