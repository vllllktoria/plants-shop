import React from 'react';

import {CartIcon} from "../icons/CartIcon";
import {PersonIcon} from "../icons/PersonIcon";
import {FilterIcon} from "../icons/FilterIcon";

import * as Styles from "./Navbar.styles";


export const Navbar = () => {
    return (
        <Styles.NavbarWrapper>
            <Styles.NavbarContent>
                <Styles.NavbarLogo>
                    GREENMIND
                </Styles.NavbarLogo>
                <Styles.NavbarLinks>
                    <Styles.LinksItem href="/">
                        Home
                    </Styles.LinksItem>
                    <Styles.LinksItem href="/products">
                        Products
                    </Styles.LinksItem>
                    <Styles.LinksItem href="/contacts">
                        Contacts
                    </Styles.LinksItem>
                </Styles.NavbarLinks>
            </Styles.NavbarContent>
            <Styles.NavbarWidgets>
                <Styles.CartButton href="/cart">
                    <CartIcon />
                </Styles.CartButton>
                <Styles.PersonButton href="/profile">
                    <PersonIcon />
                </Styles.PersonButton>
                <Styles.Line />
                <Styles.FilterButton>
                    <FilterIcon />
                </Styles.FilterButton>
            </Styles.NavbarWidgets>
        </Styles.NavbarWrapper>
    );
};
