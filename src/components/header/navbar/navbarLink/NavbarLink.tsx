import { Icon } from "@iconify/react/dist/iconify.js";
import "./style.css";
import { NavLink } from "react-router-dom";

interface NavbarLinkProps extends LinkProps {
  lineEffect: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ name, href, icon, lineEffect }) => {
  return (
    <NavLink to={href}
      className={`${lineEffect ? "nav-bar-link-line-effect" : "nav-bar-link"} cursor-pointer font-semibold text-base space-x-2 flex`}>
      <Icon icon={icon} fontSize={25} className="stroke-[5px]" />
      <span>{name}</span>
    </NavLink>
  );
};


export default NavbarLink
