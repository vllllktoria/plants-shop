import styled from "styled-components";

import {Color} from "../../../shared/constants/Color";

export const CategoriesPanelWrapper = styled.div`
  padding: 97px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 96px;
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