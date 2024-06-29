

import Footer from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { Outlet } from 'react-router-dom';

const links: Array<LinkProps> = [
    {
        icon: "fluent:home-12-regular",
        name: 'Home',
        href: '/',
        key: 'home'
    },
    {
        icon: "icon-park-outline:hospital-bed",
        name: "List Your Stay",
        href: "list-stay",
        key: "list-stay",
    },
    {
        icon: "ic:baseline-search",
        name: "Search",
        href: "search",
        key: "search"
    }
]


const PublicLayout = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header links={links} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PublicLayout