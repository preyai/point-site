import { useState } from "react"
import Music from "../../assets/music/pointsoung.mp3"
import { useRef } from "react"

const Sound = (props) => {
    const {active, setActive} = props
    const player = useRef()

    // const [active, setActive] = useState(true)

    const handler = () => {
        setActive(!active)
        if (!active)
        player.current.pause()
        else
        player.current.play()
    }

    return (
        <div
            className={`sound-icon ${active && 'disabled'}`}
            onClick={handler}
        >
                <audio src={Music} ref={player} loop/>

            <div className='sound-wave'>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
                <i className='bar bar2'></i>
            </div>
        </div>
    )
}

export default Sound