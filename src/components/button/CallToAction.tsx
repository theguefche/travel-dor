import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'

type CallToActionProps = {
    text: string
    link: string
}

const CallToAction = ({text , link} : CallToActionProps) => {
    return (
        <Link to={link} className="book-your-stay-button no-underline">
            <Icon icon="mdi:bed"  className='arr-1' fontSize={25} />
            <span className="text">{text}</span>
            <span className="circle"></span>
            <Icon icon="iconamoon:arrow-right-2-bold" className="arr-2" fontSize={25} />
        </Link>
    )
}

export default CallToAction