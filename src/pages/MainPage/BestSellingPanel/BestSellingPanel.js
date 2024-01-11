import React from 'react';

import {BestsellersList} from "../../../shared/components/BestsellersList/BestsellersList";
import {ArrowRightButton} from "../../../shared/components/icons/MainPageIcons/ArrowRightButton";

import * as Styles from "./BestSellingPanel.styles";

export const BestSellingPanel = () => {
    return (
        <Styles.BestSellingWrapper>
            <Styles.BestSellingInfo>
                <Styles.BestSellingText>
                    <Styles.BestSellingTitle>
                        Best Selling
                        Plants
                    </Styles.BestSellingTitle>
                    <Styles.BestSellingSubtitle>
                        Easiest way to
                        healthy life by buying
                        your favorite plants
                    </Styles.BestSellingSubtitle>
                </Styles.BestSellingText>
                <Styles.BestSellingButton>
                    See more
                    <ArrowRightButton/>
                </Styles.BestSellingButton>
            </Styles.BestSellingInfo>
            <BestsellersList />
        </Styles.BestSellingWrapper>
    );
};
