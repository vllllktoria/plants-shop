import styled from "styled-components";

import {Color} from "../../constants/Color";

export const CategoryItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 10px;
  width: 350px;
  height: 550px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 4px rgba(243, 243, 243, 0.35),
    0 0 10px 4px rgba(243, 243, 243, 0.35) inset,
    6px 0 10px 4px rgba(243, 243, 243, 0.35),
    -6px 0 10px 4px rgba(243, 243, 243, 0.35),
    0 6px 10px 4px rgba(243, 243, 243, 0.35);
  }
`;

export const CategoryItemImage = styled.img`
  width: 352px;
  height: 512px;
  border-radius: 12px;
`;

export const CategoryItemName = styled.span`
  color: ${Color.black};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;