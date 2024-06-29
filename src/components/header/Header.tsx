import Logo from '@components/brand/logo/Logo';
import IconButton from '@components/button/IconButton';
import SmallNav from '@components/header/navbar/small/SmallNav';
import WideNavBar from '@components/header/navbar/wide/WideNavBar';

import { useTypedSelector } from '@app-store';
import UserMenu from '@components/header/user-menu/UserMenu';
import { Icon } from '@iconify/react';
import AppDrawer from '@layout/drawer/AppDrawer';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import LanguageSelecter from '@components/button/language-selecter/LanguageSelecter';
import ThemeSwitchButton from '@components/button/theme-switch/ThemeSwitchButton';


export const Header = (props: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMedium = useMediaQuery({ query: '(max-width: 768px)' })
  const navi = useNavigate();

  const HamburgerButton = <Hamburger rounded size={20} toggled={isMenuOpen} toggle={setIsMenuOpen} />
  const nav = <IconButton>{HamburgerButton}</IconButton>

  const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn)

  return (
    <Navbar className='layout-element flex-wrap' position='static' height="3rem" maxWidth='full'>
      <NavbarContent>

        {
          isMedium && <AppDrawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} title={<Logo />} CloseButton={HamburgerButton} TriggerButton={nav} >
            <SmallNav links={props.links} />
          </AppDrawer>
        }



        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      {
        !isMedium && <WideNavBar links={props.links} />
      }


      <NavbarContent justify="end" className='flex space-x-4'>
        {
          isLoggedIn ? <UserMenu /> : <Button onPress={() => { navi('sign-in') }} className='nav-bar-link text-primary' color='primary' variant='bordered' endContent={<Icon fontSize={25} icon="material-symbols:login" />}>Sign In</Button>
        }
        {
          !isMedium && <NavbarItem className='flex space-x-2'>
            <ThemeSwitchButton />
            <LanguageSelecter />
          </NavbarItem>
        }
        
      </NavbarContent>

    </Navbar>
  )
}