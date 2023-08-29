import { useEffect, useState } from "react"
import s1 from '../../assets/images/s-01.jpg'
import s2 from '../../assets/images/s-02.png'
import s3 from '../../assets/images/s-03.png'
import s4 from '../../assets/images/s-04.png'
import v1 from '../../assets/video/spring.mp4'
import v2 from '../../assets/video/summer.mp4'
import v3 from '../../assets/video/autumn.mp4'
import v4 from '../../assets/video/winter.mp4'
import Sound from "./Sound"
import { set } from "date-fns"
import Video from "./Video"


const seasons = [
    {
        title: 'весной',
        image: s1,
        video: v1
    },
    {
        title: 'летом',
        image: s2,
        video: v2
    },
    {
        title: 'осенью',
        image: s3,
        video: v3
    },
    {
        title: 'зимой',
        image: s4,
        video: v4
    }
]

const Header = ({ refs }) => {
    const media = window.matchMedia('(max-width: 700px)')
    const [season, setSeason] = useState(0)
    const [width, setWidth] = useState(0)
    const [mute, setMute] = useState(true)
    const [deg, setDeg] = useState(0)
    const [int, setInt] = useState()
    const [menuOpen, setMenuOpen] = useState(false)
    const time = 8000

    useEffect(() => {
        clearInterval(int)
        setWidth(0)
        let n = 0
        const id = setInterval(() => {
            if (n < 100) {
                setWidth((prev) => prev + 1)
            }
            else {
                setWidth(0)
                setDeg(prev => prev + 90)
                setSeason((prev) => prev < (seasons.length - 1) ? prev + 1 : 0)
            }
            n++;
        }, time / 100)
        setInt(id)
    }, [season])

    const changeSeason = (prev = false) => {
        clearInterval(int)
        if (prev) {
            const s = season === 0 ? 3 : season - 1
            setDeg(prev => prev - 90)
            setSeason(s)
        }
        else {
            const s = season === 3 ? 0 : season + 1
            setDeg(prev => prev + 90)
            setSeason(s)
        }
    }

    const menuHandler = (e, i) => {
        e.preventDefault()
        setMenuOpen(false)
        if (refs.current)
            if (media && media.matches)
                refs.current[i].scrollIntoView({
                    behavior: 'auto',
                    block: 'start',
                    inline: 'center'
                })
            else
                refs.current[i].scrollIntoView({
                    behavior: 'auto',
                    block: i === 2 ? 'start' : 'center',
                    inline: 'center'
                })
    }
    return (
        <>
            <header>
                <Video seasons={seasons} season={season} video={seasons[season].video} />
                <div className={`container ${menuOpen ? 'isMenu' : ''}`}>
                    <div className={`topline`}>
                        <img className="logo" src="/assets/images/logo.svg" alt="" />
                        <a className="phone" href="tel:+79197791795">+7 919 779 17 95</a>
                        <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                            <img src="../../assets/images/menu.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="container" style={{ margin: 'auto' }}>
                    <div className="circle_wrap">
                        <img className="circle_season circle_season-1" style={season === 3 ? { opacity: 1 } : {}} src="../../assets/images/s1.svg" alt="" />
                        <img className="circle_season circle_season-2" style={season === 0 ? { opacity: 1 } : {}} src="../../assets/images/s2.svg" alt="" />
                        <img className="circle_season circle_season-3" style={season === 2 ? { opacity: 1 } : {}} src="../../assets/images/s4.svg" alt="" />
                        <img className="circle_season circle_season-4" style={season === 1 ? { opacity: 1 } : {}} src="../../assets/images/s3.svg" alt="" />
                        <div className="circle">
                            <div>
                                <p style={{ color: 'transparent' }}>Lifestyle коттеджи</p>
                                <p>Lifestyle коттеджи</p>
                                {/* <p>эко-аппартаментов</p> */}
                            </div>
                            <div className="circle_title">
                                <div className="arrow" onClick={() => changeSeason(true)}><img src="../../assets/images/left arrow.png" alt="" /></div>
                                <p className="text-anim ">
                                    <span style={{ width: `${width}%`, transition: `${time / 100}ms` }} >{seasons[season].title}</span>
                                    <span>{seasons[season].title}</span>
                                </p>
                                <div className="arrow" onClick={() => changeSeason()}><img src="../../assets/images/right arrow.png" alt="" /></div>
                            </div>
                            <div>
                                <p>в любой части</p>
                                <p>России</p>
                            </div>
                            <div className="circle_points">
                                <div />
                                <div />
                                <div />
                                <div />
                            </div>
                            <div className="circle_border">
                                <div className="circle_white" />
                                <div className="circle_white" />
                                <div className="circle_white" />
                                <div className="circle_white" />
                                <div className="circle_red" style={{ transform: `rotateZ(${deg}deg)` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sound">
                        {/* <img src="../../assets/images/sound-waves.png" alt="" /> */}
                        <Sound active={mute} setActive={setMute} />
                    </div>
                </div>
            </header>
            <div id="menu" className={menuOpen ? 'active' : ''}>
                <ul>
                    <li>
                        <a href="#" onClick={(e) => menuHandler(e, 0)}>Забронировать</a>
                    </li>
                    {/* <li>
                        <a href="#" onClick={(e) => menuHandler(e, 1)}>Активности</a>
                    </li> */}
                    <li>
                        <a href="#" onClick={(e) => menuHandler(e, 1)}>О нас</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => menuHandler(e, 2)}>Философия</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => menuHandler(e, 3)}>Отзывы</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => menuHandler(e, 4)}>Скачать</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => menuHandler(e, 5)}>Социальные сети</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header