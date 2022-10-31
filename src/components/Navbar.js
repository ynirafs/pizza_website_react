import React from 'react';
import { Nav, NavbarLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarLink to='/'>Pomodoro Pizza</NavbarLink>
                <NavIcon onClick={ toggle }>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;