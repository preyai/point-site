
const Social = ({ refs }) => {

    const scroll = (e) => {
        e.preventDefault()
        refs.current.find((i) => i.id === "welcome").scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        })
    }

    return (
        <section className="social" ref={(element) => refs.current.push(element)}>
            <div className="container">
                <div className="social_line">
                    <div className="social_block">
                        <div>Следите за нами<br />
                            в соц. сетях:</div>
                        <div className="social_links">
                            <a href="#">
                                <img src="/assets/images/vk.png" alt="" />
                            </a>
                            <a href="#">
                                <img src="/assets/images/tg.png" alt="" />
                            </a>
                            <a href="#">
                                <img src="/assets/images/ok.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="social_gallery">
                        <img src="/assets/images/s1.png" alt="" />
                        <img src="/assets/images/s2.png" alt="" />
                        <img src="/assets/images/s3.png" alt="" />
                        <img src="/assets/images/s4.png" alt="" />
                    </div>
                </div>
                <a href="#" onClick={scroll} className="text-anim text-anim_frames social_book">
                    <div>забронировать</div>
                    <div>забронировать</div>
                </a>
            </div>
            <div className="wtc">
                <img src="/assets/images/wtc.svg" alt="wtc" />
                <img src="/assets/images/wtc.svg" alt="wtc" />
                <img src="/assets/images/wtc.svg" alt="wtc" />
                <img src="/assets/images/wtc.svg" alt="wtc" />
                {/* <img src="/assets/images/wtc.svg" alt="wtc"/> */}
            </div>
        </section>

    )
}

export default Social