import { useState } from "react"
import BigText from "../BigText"

const facts = [
    {
        image: '/assets/images/about.png',
        text: 'Каждый POINT. представляет собой комплекс из 5-15 современных экологичных домов и маленького ресторанчика авторской кухни.'
    },
    {
        image: '/assets/images/about.png',
        text: 'Решающим фактором для открытия нового POINT. является его местоположение. Мы рассматриваем только локации, богатые досугом. Это могут быть участки рядом с водоемом, в горах, в лесах или в исторических местах.'
    },
    {
        image: '/assets/images/about.png',
        text: 'Уникальность POINT. в гибридной модели управления, где помимо технологических инноваций ключевую роль, тем не менее, играют наши сотрудники. '
    },
    {
        image: '/assets/images/about.png',
        text: 'Руководство POINT. ставит высокие стандарты обслуживания превыше всего и подбирает персонал, который разделяет эти ценности.'
    },
    {
        image: '/assets/images/about.png',
        text: 'Гостям POINT. предлагается широкий ассортимент досуга в локации вне зависимости от сезона года. Здесь понравится любителям как активного, так и спокойного отдыха на природе.'
    }
]
const About = ({ refs }) => {
    const [fact, setFact] = useState(0)

    const next = () => {
        const n = (fact === facts.length - 1) ? 0 : fact + 1
        setFact(n)
    }
    const prev = () => {
        const n = (fact === 0) ? facts.length - 1 : fact - 1
        setFact(n)
    }

    return (
        <section id="section-about" ref={(element) => refs.current.push(element)}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2><span>о нас</span></h2>
                        <BigText>
                            <p><strong>Point</strong>  — это инновационный проект, основная цель которого – подарить гостям возможность провести активный отдых в комфорте в любой точке на просторах нашей необъятной страны. Уютные гостевые домики комфорт-класса в совокупности с широким ассортиментом досуга в окрестностях и аутентичной гастрономической подборкой от наших шеф-поваров делают POINT. местом притяжения как для любителей отдохнуть от городской суеты на природе, так и для тех, кто предпочитает гибкий рабочий график офисной рутине.</p>
                        </BigText>
                        <img src={facts[fact].image} alt="" className="facts_image_mobile" />
                        <div className="facts_title">факты о нас </div>
                        <div className="facts">
                            <div className="facts_nav">
                                {/* <div></div> */}
                                <div className="facts_btn" onClick={prev}>↑</div>
                                <div className="facts_btn" onClick={next}>↓</div>
                            </div>
                            <div className="facts_number">{fact + 1}</div>
                            <div className="facts_body">
                                {facts[fact].text}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src={facts[fact].image} alt="" className="facts_image" />
                    </div>
                </div>
            </div>
        </section >

    )
}

export default About