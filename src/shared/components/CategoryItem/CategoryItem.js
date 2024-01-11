import React from 'react';

import * as Styles from "./CategoryItem.styles";

export const CategoryItem = ({ categoryImage, categoryName }) => {
    return (
        <Styles.CategoryItemWrapper>
            <Styles.CategoryItemImage
                src={categoryImage}
                alt={categoryName}
            />
            <Styles.CategoryItemName>{categoryName}</Styles.CategoryItemName>
        </Styles.CategoryItemWrapper>
    );
};
