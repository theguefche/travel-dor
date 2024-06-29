import NavbarLink from "@components/header/navbar/navbarLink/NavbarLink"

const SmallNav = (props: NavBarProps) => {
    return (
        <ul className='space-y-3'>
            {props.links.map((link, index) => (
                <li key={`${link}-${index}`} className='list-none'>
                    <NavbarLink lineEffect={false} href={link.href} name={link.name} key={index.toString()} icon={link.icon} />
                </li>
            ))}
        </ul>
    )
}

export default SmallNav