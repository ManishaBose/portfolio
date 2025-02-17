import me from '../../assets/me.png'
import { motion, useSpring } from "framer-motion"
export function Hero(){
    return(
        <div className='pt-10 pb-30'>
            <div className="grid grid-cols-2">
                <div className='w-max'>
                    <div className='text-9xl'>Build.</div>
                    <div className='text-9xl'>Break.</div>
                    <div className='text-9xl'>Improve.</div>
                    <div className='text-9xl'>Repeat.</div>
                </div>
                <div className='card-wrapper h-90'>
                    <img src={me} className='card-content rounded-lg'/>
                </div>
            </div> 
            <div className='pt-10 text-2xl text-gray-600 pb-10'>Crafting pixel-perfect, code-  precise, scalable web application.</div>
            <a href='/cv.pdf' download>
                <button className='bg-gray-100 p-3 rounded-full cursor-pointer text-gray-800 font-sans'>DOWNLOAD CV</button>
            </a>
        </div>
    )
}