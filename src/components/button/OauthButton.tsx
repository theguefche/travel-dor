import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

type OauthButtonProps = {
    icon: string
    link: string
    oauth: string
    log: "in" | "up"
}

const OauthButton = ({ icon, oauth, link, log }: OauthButtonProps) => {
    return (
        <Link to={link} className='w-full lg:w-1/2'> <Button className='w-full' variant="bordered" startContent={<Icon style={{minWidth: "25px"}} icon={icon} fontSize={20} />}> {log == "in" ? "Sign In With" : "Sign Up With"} {oauth}</Button></Link>
    )
}

export default OauthButton