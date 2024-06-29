import Logo from "@components/brand/logo/Logo"
import SocialLink from "@components/button/SocialLink"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Divider } from "@nextui-org/react"
import { NavLink } from "react-router-dom"

const Footer = () => {


    return (


        <>
            <footer className="full-layout-element p-10 space-y-5 relative bottom-0">
                <div
                    className="flex items-center justify-center sm:justify-between flex-col sm:flex-row gap-7 lg:gap-0">
                    <Logo />
                    {/* <a href="javascript:;"
                        className="flex items-center gap-2 py-3.5 px-7 rounded-full">Contac
                        us <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 6L14.8333 6M10.6667 11L15.0774 6.58926C15.3552 6.31148 15.4941 6.17259 15.4941 6C15.4941 5.82741 15.3552 5.68852 15.0774 5.41074L10.6667 1"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a> */}

                    <NavLink to={""}><Button color="primary" size="lg" endContent={<Icon icon="uil:message" />}>Contact US</Button></NavLink>
                </div>
                <Divider />
                <div className=" flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
                    <span className="text-sm text-gray-500 ">© 2024, All rights reserved.</span>
                    <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 ">
                        <SocialLink icon="logos:facebook" />
                        <SocialLink icon="skill-icons:instagram" />
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer