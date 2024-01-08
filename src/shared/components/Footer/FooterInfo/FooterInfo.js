import React from 'react';

import {Facebook} from "../../icons/FooterIcons/Facebook";
import {Instagram} from "../../icons/FooterIcons/Instagram";
import {Twitter} from "../../icons/FooterIcons/Twitter";

import * as Styles from "./FooterInfo.styles";

export const FooterInfo = () => {
    return (
        <Styles.FooterMainInfo>
            <Styles.FooterText>
                <Styles.FooterTitle>GREENMIND</Styles.FooterTitle>
                <Styles.FooterSubtitle>
                    We help you find your dream plant
                </Styles.FooterSubtitle>
            </Styles.FooterText>
            <Styles.FooterContacts>
                <Styles.ContactItem>
                    <Facebook />
                </Styles.ContactItem>
                <Styles.ContactItem>
                    <Instagram />
                </Styles.ContactItem>
                <Styles.ContactItem>
                    <Twitter />
                </Styles.ContactItem>
            </Styles.FooterContacts>
        </Styles.FooterMainInfo>
    );
};