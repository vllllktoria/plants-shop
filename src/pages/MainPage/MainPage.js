import React from 'react';

import {MainPageBanner} from "./MainPageBanner/MainPageBanner";

import * as Styles from "./MainPage.styles";

export const MainPage = () => {
    return (
        <Styles.MainWrapper>
            <MainPageBanner />
        </Styles.MainWrapper>
    );
};
