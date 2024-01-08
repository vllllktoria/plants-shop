import React from 'react';

import {MainPageBanner} from "./MainPageBanner/MainPageBanner";
import {BestSellingPanel} from "./BestSellingPanel/BestSellingPanel";

import * as Styles from "./MainPage.styles";

export const MainPage = () => {
    return (
        <Styles.MainWrapper>
            <MainPageBanner />
            <BestSellingPanel />
        </Styles.MainWrapper>
    );
};
