import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { useState } from "react"
import Home from "./Home"
import Home2 from "./Home2"

const about = [
    {
        title: <>Возможность управлять своим отдыхом с помощью <span>мобильного устройства</span></>,
        text: 'Мы приветствуем технологии в нашей жизни и стараемся идти в ногу со временем. В то же время мы понимаем, как важно живое общение даже во время отдыха. Именно поэтому в любом отеле POINT.  наши гости могут не только получать желаемые услуги через специальное мобильное приложение, но и обратиться напрямую к администратору в любое время суток.'
    },
    {
        title: <>Системы <span>вентиляции и кондиционирования</span> в каждом домике</>,
        text: 'Все дома POINT. оснащены системами вентиляции и кондиционирования, чтобы нашим гостям было комфортно вне зависимости от погоды за окном. Специальные приточные клапаны и вытяжной насос обеспечивают бесперебойную циркуляцию свежего воздуха, а наличие раздельных блоков кондиционирования в спальне и гостиной позволят поддерживать желаемые температуры в каждой из комнат.'
    },
    {
        title: <>Уютная <span>терраса</span> с мебелью для отдыха</>,
        text: 'Каждый домик оборудован небольшой, но практичной террасой с уличной мебелью, чтобы наши гости могли наслаждаться хорошей погодой на свежем воздухе.'
    },
    {
        title: <>Кровать и матрас <span>повышенного</span> комфорта для Вашего сна</>,
        text: 'Здоровый и крепкий сон – один из важнейших аспектов нашей жизни, а на отдыхе он еще и является залогом положительных впечатлений от всей поездки в целом. Поэтому в POINT. мы заботимся о здоровье наших гостей и предоставляем все условия их для комфортного сна.'
    },
    {
        title: <><span>Два санузла</span> в каждом домике POINT.</>,
        text: 'Каждый домик оборудован двумя полноценными санузлами с туалетом и душем. Это может быть особенно актуально, если необходимо быстро собраться или если Вы отдыхаете с семьёй.'
    },
    {
        title: <><span>Бесплатный WiFi</span> на территории всего отеля</>,
        text: 'Какого бы уединения и спокойствия мы не искали на отдыхе, доступ в интернет нам по-прежнему необходим. Вне зависимости от локации мы делаем все возможное, чтобы наши гости всегда оставались на связи с внешним миром.'
    },
    {
        title: <><span>Гибридная</span> система отопления в каждом домике</>,
        text: 'Благодаря наличию теплого пола по всей жилой площади, а также настенным обогревателям наши домики остаются максимально комфортными для проживания даже в экстремальные зимние температуры. При этом интенсивность обогрева всегда может быть уменьшена или увеличена в зависимости от предпочтений наших гостей.'
    },

    {
        title: <><span>Панорамное остекление</span> всей лицевой части домика</>,
        text: 'Благодаря панорамным окнам, которые занимают практически всю поверхность лицевой части наших домов, наши гости могут наслаждаться красивыми видами и естественным освещением в солнечные дни.'
    },

    {
        title: <>Вечерний досуг на интерактивных телевизорах <span>Smart TV</span></>,
        text: 'Что может быть лучше после длинного дня на природе, чем посмотреть любимый фильм в тёплом семейном кругу? Каждый дом POINT. оборудован телевизором с поддержкой функции Smart TV для любителей посмотреть киношку или сериальчик перед сном.'
    }
]

const Philosophy = ({ refs }) => {
    const media = window.matchMedia('(max-width: 700px)')
    const [current, setCurrent] = useState(0)
    return (
        <section ref={(element) => refs.current.push(element)}>
            <div className="container">
                <h2>Философия <span>дома</span></h2>
                <div className="text-center my-5">
                    <div>
                        {media && media.matches ?
                            <Home2 />
                            :
                            <Home />
                        }
                    </div>
                </div>
                {/* <h3>умный <span>дом</span></h3> */}
                <div className="smart-house">
                    <div className="smart-house_wrap">

                        <Splide
                            hasTrack={false}
                            className="smart-house_list"
                            options={{
                                pagination: false,
                                perPage: 7,
                                breakpoints: {
                                    700: {
                                        perPage: 3
                                    }
                                }
                            }}
                        >
                            <div className="smart-house_wrapper">
                                <div className="splide__arrows">
                                    <button className="splide__arrow splide__arrow--prev">←</button>
                                    {/* <button className="splide__arrow splide__arrow--next">→</button> */}
                                </div>
                                <SplideTrack className="smart-house_track">
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(0)}>
                                            <img src="/assets/images/Smartphone.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(1)}>
                                            <img src="/assets/images/Conditioner.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(2)}>
                                            <img src="/assets/images/Terrace.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(3)}>
                                            <img src="/assets/images/Bed.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(4)}>
                                            <img src="/assets/images/Shower.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(5)}>
                                            <img src="/assets/images/WiFi.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(6)}>
                                            <img src="/assets/images/Heating.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(7)}>
                                            <img src="/assets/images/Panorama.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                    <SplideSlide>
                                        <div className="smart-house_item" onMouseOver={() => setCurrent(8)}>
                                            <img src="/assets/images/SmartTV.svg" alt="" />
                                            <div className="smart-house_arrow" />
                                        </div>
                                    </SplideSlide>
                                </SplideTrack>
                                <div className="splide__arrows">
                                    {/* <button className="splide__arrow splide__arrow--prev">←</button> */}
                                    <button className="splide__arrow splide__arrow--next">→</button>
                                </div>
                            </div>
                        </Splide>
                        {/* <div className="smart-house_list">
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(0)}>
                                <img src="/assets/images/1-smartphone.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(1)}>
                                <img src="/assets/images/2-air-conditioner.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(2)}>
                                <img src="/assets/images/3-bar-counter.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(3)}>
                                <img src="/assets/images/4-bed.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(4)}>
                                <img src="/assets/images/5-cupboard.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(5)}>
                                <img src="/assets/images/6-free-wifi.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                            <div className="smart-house_item" onMouseEnter={() => setCurrent(6)}>
                                <img src="/assets/images/7-central-heating.png" alt="" />
                                <div className="smart-house_arrow" />
                            </div>
                        </div> */}
                    </div>
                    <div className="smart-house_body">
                        <h4>
                            {about[current].title}
                        </h4>
                        <p>
                            {about[current].text}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Philosophy