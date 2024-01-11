import React from "react";

import {CategoryItem} from "../CategoryItem/CategoryItem";
import naturalPlantsCategory from "../images/NaturalPlantsCategory.png"
import plantAccessoriesCategory from "../images/PlantAccessoriesCategory.png"
import artificialPlantsCategory from "../images/ArtificialPlantsCategory.png"

import * as Styles from "./CategoriesList.styles";

export const CategoriesList = () => {
    return(
        <Styles.CategoriesListWrapper>
            <CategoryItem
                categoryImage={naturalPlantsCategory}
                categoryName={"Natural Plants"}
            />
            <CategoryItem
                categoryImage={plantAccessoriesCategory}
                categoryName={"Plant Accessories"}
            />
            <CategoryItem
                categoryImage={artificialPlantsCategory}
                categoryName={"Artificial Plants"}
            />
        </Styles.CategoriesListWrapper>
    )
}