import React from 'react';

import * as Styles from "./ProductCard.styles";

export const ProductCard = ({ productName, productImage, productPrice }) => {

    return (
        <Styles.ProductCardWrapper>
            <Styles.ProductImage src={productImage} alt={productName} />
            <Styles.ProductCardInfo>
                <Styles.ProductTitle>{productName}</Styles.ProductTitle>
                <Styles.ProductPrice>{productPrice}</Styles.ProductPrice>
            </Styles.ProductCardInfo>
        </Styles.ProductCardWrapper>
    );
};
