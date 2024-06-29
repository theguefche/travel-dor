
import NavbarLink from '@components/header/navbar/navbarLink/NavbarLink'
import { NavbarContent, NavbarItem } from '@nextui-org/react'

const WideNavBar = (props: NavBarProps) => {
    return (
        <NavbarContent justify="center">
            {props.links.map((link, index) => (
                <NavbarItem key={link + "" + index}>
                    <NavbarLink lineEffect={true} href={link.href} name={link.name} key={index.toString()} icon={link.icon} />
                </NavbarItem>
            ))}
        </NavbarContent>
    )
}

export default WideNavBar