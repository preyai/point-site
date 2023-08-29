import { useState } from 'react'

const BigText = (props) => {
    const { children } = props
    const media = window.matchMedia('(max-width: 700px)')
    const [open, setOpen] = useState(false)

    const handler = () => setOpen(!open)

    return (
        <div className="big-text">
            <div className={`big-text__content ${open ? 'show' : ''}`}>
                {children}
            </div>
            {media && media.matches &&
                <div className='big-text__btn' onClick={handler}>{open ? 'Скрыть' : 'Читать полностью'}</div>
            }
        </div>
    )
}

export default BigText