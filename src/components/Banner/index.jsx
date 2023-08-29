
const Banner = ({ show, to }) => {

    const handler = () => {
        console.log(to)
        if (!show && to)
            to.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
    }

    return (
        <section className={`baner ${show ? 'with-line' : ''}`} >
            <div className="container">
                <div className="row">
                    {show &&
                        <div className="col">
                            <div className="baner_price">7000 ₽ <span>/ сутки</span> </div>
                        </div>
                    }
                    <div className="col align-self-center">
                        <div className="text-anim text-anim_frames baner_title" onClick={handler} style={{ cursor: 'pointer' }}>
                            <div className="">забронировать</div>
                            <div className="">забронировать</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner