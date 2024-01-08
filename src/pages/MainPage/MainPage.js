import React from 'react';

import {MainPageBanner} from "./MainPageBanner/MainPageBanner";
import {BestSellingPanel} from "./BestSellingPanel/BestSellingPanel";
import {AboutUsPanel} from "./AboutUsPanel/AboutUsPanel";
import {CategoriesPanel} from "./CategoriesPanel/CategoriesPanel";

import * as Styles from "./MainPage.styles";

export const MainPage = () => {
    return (
        <Styles.MainWrapper>
            <MainPageBanner />
            <BestSellingPanel />
            <AboutUsPanel />
            <CategoriesPanel />
        </Styles.MainWrapper>
    );
};
