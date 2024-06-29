import { Icon } from '@iconify/react/dist/iconify.js'

type SocialLinkProps = {
    icon: string
}

const SocialLink = ({ icon }: SocialLinkProps) => {
    return (
        <Icon icon={icon} className="opacity-70 hover:opacity-100 cursor-pointer hover:scale-110 transition-all duration-150" fontSize={30} />
    )
}

export default SocialLink