import styled from "styled-components";

import {Color} from "../../constants/Color";

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 4px rgba(243, 243, 243, 0.35),
    0 0 10px 4px rgba(243, 243, 243, 0.35) inset,
    6px 0 10px 4px rgba(243, 243, 243, 0.35),
    -6px 0 10px 4px rgba(243, 243, 243, 0.35),
    0 6px 10px 4px rgba(243, 243, 243, 0.35);
  }
`;

export const ProductImage = styled.img`
  width: 299px;
  height: 363px;
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ProductTitle = styled.span`
  color: ${Color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const ProductPrice = styled.span`
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;
