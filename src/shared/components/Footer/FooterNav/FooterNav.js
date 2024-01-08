import React from 'react';

import * as Styles from "./FooterNav.styles";

export const FooterNav = () => {
    return (
        <Styles.FooterNavWrapper>
            <Styles.FooterNavItem>
                <Styles.FooterNavTitle>
                    Information
                </Styles.FooterNavTitle>
                <Styles.FooterNavLink>
                    About
                </Styles.FooterNavLink>
                <Styles.FooterNavLink>
                    Product
                </Styles.FooterNavLink>
                <Styles.FooterNavLink>
                    Blog
                </Styles.FooterNavLink>
            </Styles.FooterNavItem>
            <Styles.FooterNavItem>
                <Styles.FooterNavTitle>
                    Company
                </Styles.FooterNavTitle>
                <Styles.FooterNavLink>
                    Community
                </Styles.FooterNavLink>
                <Styles.FooterNavLink>
                    Career
                </Styles.FooterNavLink>
                <Styles.FooterNavLink>
                    Our story
                </Styles.FooterNavLink>
            </Styles.FooterNavItem>
            <Styles.FooterNavItem>
                <Styles.FooterNavTitle>
                    Contact
                </Styles.FooterNavTitle>
                <Styles.FooterNavLink>
                    Getting Started
                </Styles.FooterNavLink>
                <Styles.FooterNavLink>
                    Pricing
                </Styles.FooterNavLink>
                <Styles.FooterNavLink>
                    Resources
                </Styles.FooterNavLink>
            </Styles.FooterNavItem>
        </Styles.FooterNavWrapper>
    );
};
