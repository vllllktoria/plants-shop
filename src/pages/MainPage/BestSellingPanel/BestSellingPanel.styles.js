import styled from "styled-components";

import {Color} from "../../../shared/constants/Color";

export const BestSellingWrapper = styled.div`
  display: flex;
  padding: 97px 48px;
`;

export const BestSellingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BestSellingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BestSellingTitle = styled.span`
  width: 256px;
  color: ${Color.black};
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
`;

export const BestSellingSubtitle = styled.span`
  width: 196px;
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const BestSellingButton = styled.button`
  width: 168px;
  height: 51px;
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${Color.blue};
  border: none;
  outline: none;
  color: ${Color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover{
    background-color: ${Color.darkBlue};
  }
`;
