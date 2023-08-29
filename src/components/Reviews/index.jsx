import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"

const Reviews = ({ refs }) => {

    return (
        <section ref={(element) => refs.current.push(element)}>
            <div className="container">
                <h2>отзывы <span>о нас</span></h2>
                <div className="reviews">
                    {/* <div className="reviews_list"> */}
                    <Splide
                        className="reviews_list"
                        hasTrack={false}
                        options={{
                            pagination: false,
                            perPage: 4,
                            gap: '8px',
                            breakpoints: {
                                700: {
                                    perPage: 1
                                }
                            }
                        }}
                    >
                        <div>
                            <SplideTrack>
                                <SplideSlide>
                                    <div className="reviews_item">
                                        <img src="/assets/images/4.png" alt="" />
                                        <div className="reviews_name">Александр</div>
                                        <button className="reviews_btn">Просмотреть отзыв</button>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="reviews_item">
                                        <img src="/assets/images/5.png" alt="" />
                                        <div className="reviews_name">Анастасия</div>
                                        <button className="reviews_btn">Просмотреть отзыв</button>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="reviews_item">
                                        <img src="/assets/images/6.png" alt="" />
                                        <div className="reviews_name">Елена</div>
                                        <button className="reviews_btn">Просмотреть отзыв</button>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="reviews_item">
                                        <img src="/assets/images/7.png" alt="" />
                                        <div className="reviews_name">Сергей</div>
                                        <button className="reviews_btn">Просмотреть отзыв</button>
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                            <div className="reviews_nav splide__arrows">
                                <button className="splide__arrow splide__arrow--prev">←</button>
                                <button className="splide__arrow splide__arrow--next">→</button>
                            </div>
                        </div>
                    </Splide>
                    {/* </div> */}

                </div>
            </div>
        </section>

    )
}

export default Reviews