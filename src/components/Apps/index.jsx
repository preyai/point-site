import { Splide, SplideSlide } from "@splidejs/react-splide"

const Apps = ({ refs }) => {

    return (
        <section ref={(element) => refs.current.push(element)}>
            <div className="container">
                <div className="apps">
                    <h2>
                        управляйте своим<br />
                        отдыхом с помощью<br />
                        <span>мобильного телефона</span>
                    </h2>
                    <div className="apps_list">
                        <Splide
                            // style={{ width: "100%" }}
                            options={{
                                arrows: false,
                                pagination: false,
                                perPage: 2,
                                gap: '30px',
                                breakpoints: {
                                    700: {
                                        perPage: 1,
                                        gap: null,
                                        padding: { left: 50, right: 50 },
                                    }
                                }
                            }}
                        >
                            <SplideSlide>
                                <div className="apps_wrap">
                                    <div className="apps_item">
                                        <div className="apps_bords">
                                            <div />
                                            <div />
                                            <div />
                                            <div />
                                        </div>
                                        <img className="apps_logo" src="/assets/images/applelogo.png" alt="" />
                                        <img className="apps_qr" src="/assets/images/QR.png" alt="" />
                                        <img className="apps_title" src="/assets/images/AppStore.png" alt="" />
                                        <button className="apps_btn">скачать</button>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="apps_wrap">
                                    <div className="apps_item">
                                        <div className="apps_bords">
                                            <div />
                                            <div />
                                            <div />
                                            <div />
                                        </div>
                                        <img className="apps_logo" src="/assets/images/googlelogo.png" alt="" />
                                        <img className="apps_qr" src="/assets/images/QR.png" alt="" />
                                        <img className="apps_title" src="/assets/images/GooglePlay.png" alt="" />
                                        <button className="apps_btn">скачать</button>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Apps