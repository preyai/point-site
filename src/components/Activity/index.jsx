import { useEffect } from "react"
import { useState } from "react"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css/core'
import { right } from "@popperjs/core"



const data = [
    {
        title: 'Рыбалка',
        background: '/assets/images/fishing.jpg',
        icon: '/assets/images/fishing-ic.svg'
    },
    {
        title: 'Прогулка',
        background: '/assets/images/stroll.jpg',
        icon: '/assets/images/stroll-ic.svg'
    },
    {
        title: 'Баня',
        background: '/assets/images/bath.jpg',
        icon: '/assets/images/bath-ic.svg'
    },
    {
        title: 'Пляж',
        background: '/assets/images/beach.jpg',
        icon: '/assets/images/beach-ic.svg'
    },
    {
        title: 'Тихая охота',
        background: '/assets/images/silentHunting.jpg',
        icon: '/assets/images/silentHunting-ic.svg'
    },
    {
        title: 'Веломаршруты',
        background: '/assets/images/bike.jpg',
        icon: '/assets/images/bike-ic.svg'
    },
    {
        title: 'Спа-процедуры',
        background: '/assets/images/spa.jpg',
        icon: '/assets/images/spa-ic.svg'
    },
    {
        title: 'Пейнтбол',
        background: '/assets/images/paintball.jpg',
        icon: '/assets/images/paintball-ic.svg'
    },
    {
        title: 'Барбекю',
        background: '/assets/images/barbecue.jpg',
        icon: '/assets/images/barbecue-ic.svg'
    },
    {
        title: 'Аэродром',
        background: '/assets/images/airplane.jpg',
        icon: '/assets/images/airplane-ic.svg'
    },
    {
        title: 'Аренда катера',
        background: '/assets/images/boatTrip.jpg',
        icon: '/assets/images/boatTrip-ic.svg'
    },
    {
        title: 'Водные виды \nспорта',
        background: '/assets/images/waterSports.jpg',
        icon: '/assets/images/waterSports-ic.svg'
    },
    {
        title: 'Катание на \nснегоходах',
        background: '/assets/images/snowmobile.jpg',
        icon: '/assets/images/snowmobile-ic.svg'
    },
    {
        title: 'Гонки на \nквадроциклах',
        background: '/assets/images/quadracycle.jpg',
        icon: '/assets/images/quadracycle-ic.svg'
    },
    {
        title: 'Конный клуб',
        background: '/assets/images/horseClub.jpg',
        icon: '/assets/images/horseClub-ic.svg'
    },
    {
        title: 'Беговые лыжи',
        background: '/assets/images/crossCountry.jpg',
        icon: '/assets/images/crossCountry-ic.svg'
    },
    {
        title: 'Винные вечера',
        background: '/assets/images/wineEvenings.jpg',
        icon: '/assets/images/wineEvenings-ic.svg'
    },
    {
        title: 'Экскурсии',
        background: '/assets/images/excursions.jpg',
        icon: '/assets/images/excursions-ic.svg'
    },
    {
        title: 'Охота',
        background: '/assets/images/hunting.jpg',
        icon: '/assets/images/hunting-ic.svg'
    },
]

const Activity = ({ refs }) => {


    return (
        <section ref={(element) => refs.current.push(element)}>
            <div className="container">
                <h2>доступные <span>активности</span></h2>
            </div>
            <div className="activity_list">
                <Splide
                    hasTrack={false}
                    options={{
                        speed: 300,
                        pagination: false,
                        start: 3,
                        perPage: 7,
                        focus: 'center',
                        wheel: true,
                        arrows: false,
                        breakpoints: {
                            720: {
                                perPage: 3,
                                start: 1,
                                perMove: 1,
                                type: 'loop',
                                flickPower: 100,
                                isNavigation: true,
                            }
                        },

                    }}
                ><SplideTrack>
                        {data.map((item) => (
                            <SplideSlide>
                                <li
                                    className={'activity_item'}
                                    key={item.title}
                                >
                                    <div className="activity_bgr" style={{ backgroundImage: `url(${item.background})` }}></div>
                                    <div className="activity_title">{item.title}</div>
                                    <img src={item.icon} alt="" className="activity_icon" />
                                </li>
                            </SplideSlide>))}
                    </SplideTrack>
                </Splide>
            </div>
        </section>

    )
}

export default Activity