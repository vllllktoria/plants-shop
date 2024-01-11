import styled from "styled-components";

import {Color} from "../../../shared/constants/Color";

export const CategoriesPanelWrapper = styled.div`
  padding: 97px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const CategoriesPanelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const CategoriesPanelTitle = styled.span`
  color: ${Color.black};
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
`;

export const CategoriesPanelSubtitle = styled.span`
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const ExplorePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const CategoriesPanelText = styled.span`
  width: 352px;
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const ExploreButton = styled.button`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${Color.blue};
  border: none;
  outline: none;
  cursor: pointer;
  &:hover{
    background-color: ${Color.darkBlue};
  }
`;

export const ExploreButtonText = styled.span`
  color: ${Color.black};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;
