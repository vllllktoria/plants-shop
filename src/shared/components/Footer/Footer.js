import React from 'react';

import {FooterInfo} from "./FooterInfo/FooterInfo";
import {FooterNav} from "./FooterNav/FooterNav";
import {FooterCopyright} from "./FooterCopyright/FooterCopyright";

import * as Styles from "../Footer/Footer.styles"

export const Footer = () => {
    return (
        <Styles.FooterMainWrapper>
            <Styles.FooterWrapper>
                <FooterInfo />
                <FooterNav />
            </Styles.FooterWrapper>
            <FooterCopyright />
        </Styles.FooterMainWrapper>
    );
};