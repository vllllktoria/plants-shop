import React from 'react';

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
        </Styles.CategoriesPanelWrapper>
    );
};
