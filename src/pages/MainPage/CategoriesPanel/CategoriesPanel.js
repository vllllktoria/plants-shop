import React from 'react';

import {CategoriesList} from "../../../shared/components/CategoriesList/CategoriesList";
import {ArrowRightButton} from "../../../shared/components/icons/MainPageIcons/ArrowRightButton";

import * as Styles from "./CategoriesPanel.styles";

export const CategoriesPanel = () => {
    return (
        <Styles.CategoriesPanelWrapper>
            <Styles.CategoriesPanelInfo>
                <Styles.CategoriesPanelTitle>
                    Categories
                </Styles.CategoriesPanelTitle>
                <Styles.CategoriesPanelSubtitle>
                    Find what you are looking for
                </Styles.CategoriesPanelSubtitle>
            </Styles.CategoriesPanelInfo>
            <CategoriesList />
            <Styles.ExplorePanel>
                <Styles.CategoriesPanelText>
                    Horem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Styles.CategoriesPanelText>
                <Styles.ExploreButton>
                    <Styles.ExploreButtonText>
                        Explore
                    </Styles.ExploreButtonText>
                    <ArrowRightButton />
                </Styles.ExploreButton>
            </Styles.ExplorePanel>
        </Styles.CategoriesPanelWrapper>
    );
};
