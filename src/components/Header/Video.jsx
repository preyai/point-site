import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Video = (props) => {
    const { seasons, season } = props

    return (
        <>
        {seasons.map((item, index)=>(
            <Player item={item} index={index} season={season} key={item.title}/>
        ))}
        </>
    )
}

const Player = (props) => {
    const {item, index, season} = props
    const visible = index === season
    const player = useRef()

    useEffect(()=>{
        player.current.currentTime = 0
    },[season])

    return (
        <video ref={player} playsInline controls={false} style={visible ? { opacity: 1 } : { opacity: 0 }} src={item.video} autoPlay={true} muted loop={true} />
    )
}

export default Video