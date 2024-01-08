import React from 'react';

import {ProductCard} from "../ProductCard/ProductCard";
import naturalPlant from "../images/NaturalPlants.png"
import artificialPlants from "../images/ArtificialPlants.png"
import artPlants from "../images/ArtPlants.png"

import * as Styles  from "./BestsellersList.styles";

export const BestsellersList = () => {
    return (
        <Styles.BestsellersListWrapper>
            <ProductCard
                productImage={naturalPlant}
                productName="Natural Plants"
                productPrice="₱ 1,400.00"
            />
            <ProductCard
                productImage={artificialPlants}
                productName="Artificial Plants"
                productPrice="₱ 900.00"
            />
            <ProductCard
                productImage={artPlants}
                productName="Artificial Plants"
                productPrice="₱ 3,500.00"
            />
        </Styles.BestsellersListWrapper>
    );
};
