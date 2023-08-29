
const Footer = () => {

    const toTopHandler = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <footer>
            <div className="container">
                <div className="text-center">
                    <button onClick={toTopHandler} className="to-up">вверх</button>
                </div>
            </div>
            <div className="logo_wrap">
                <div className="logo">
                    <img src="/assets/images/logo-d.png" alt="" />
                </div>
            </div>
            <div className="container">
                <div className="footer_desc">Lifestyle коттеджи</div>
                <div className="text-center">
                    <a href="tel:+79197791795" className="footer_tel">+7 919 779 17 95</a>
                </div>
                <div className="row align-items-center mt-3 mb-5">
                    <div className="col-12 col-md text-center text-lg-start">© 2022 - Все права защищены</div>
                    <div className="col-12 col-md my-4 my-md-0 text-center order0">
                        <button className="btn">Перезвоните мне</button>
                    </div>
                    <div className="col-12 col-md text-center text-lg-end">
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer