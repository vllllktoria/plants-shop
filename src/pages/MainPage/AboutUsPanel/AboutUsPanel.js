import React from 'react';

import {Plant} from "../../../shared/components/icons/MainPageIcons/Plant";
import {Box} from "../../../shared/components/icons/MainPageIcons/Box";
import phoneIcon from "../../../shared/components/images/Phone.png"

import * as Styles from "./AboutUsPanel.styles";

export const AboutUsPanel = () => {
    return (
        <Styles.AboutUsWrapper>
            <Styles.AboutUsInfo>
                <Styles.AboutUsTitle>
                    About us
                </Styles.AboutUsTitle>
                <Styles.AboutUsSubtitle>
                    Order now and appreciate the beauty of nature
                </Styles.AboutUsSubtitle>
            </Styles.AboutUsInfo>
            <Styles.AboutUsAdvantages>
                <Styles.AdvantagesItem>
                    <Styles.AdvantagesTitleWrapper>
                        <Plant />
                        <Styles.AdvantagesTitle>
                            Large Assortment
                        </Styles.AdvantagesTitle>
                    </Styles.AdvantagesTitleWrapper>
                    <Styles.AdvantagesSubtitle>
                        we offer many different types of products
                        with fewer variations in each category.
                    </Styles.AdvantagesSubtitle>
                </Styles.AdvantagesItem>
                <Styles.AdvantagesItem>
                    <Styles.AdvantagesTitleWrapper>
                        <Box />
                        <Styles.AdvantagesTitle>
                            Fast & Free Shipping
                        </Styles.AdvantagesTitle>
                    </Styles.AdvantagesTitleWrapper>
                    <Styles.AdvantagesSubtitle>
                        4-day or less delivery time, free shipping
                        and an expedited delivery option.
                    </Styles.AdvantagesSubtitle>
                </Styles.AdvantagesItem>
                <Styles.AdvantagesItem>
                    <Styles.AdvantagesTitleWrapper>
                        <Styles.AdvantagesImage src={phoneIcon}/>
                        <Styles.AdvantagesTitle>
                            24/7 Support
                        </Styles.AdvantagesTitle>
                    </Styles.AdvantagesTitleWrapper>
                    <Styles.AdvantagesSubtitle>
                        answers to any business related inquiry
                        24/7 and in real-time.
                    </Styles.AdvantagesSubtitle>
                </Styles.AdvantagesItem>
            </Styles.AboutUsAdvantages>
        </Styles.AboutUsWrapper>
    );
};
