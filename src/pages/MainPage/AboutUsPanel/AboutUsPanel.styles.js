import styled from "styled-components";

import {Color} from "../../../shared/constants/Color";

export const AboutUsWrapper = styled.div`
  padding: 0 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const AboutUsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const AboutUsTitle = styled.span`
  color: ${Color.black};
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
`;

export const AboutUsSubtitle = styled.span`
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const AboutUsAdvantages = styled.div`
  display: flex;
  gap: 24px;
`;

export const AdvantagesItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AdvantagesTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const AdvantagesImage = styled.img`
  width: 96px;
  height: 96px;
`;

export const AdvantagesTitle = styled.span`
  color: ${Color.black};
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

export const AdvantagesSubtitle = styled.span`
  width: 400px;
  color: ${Color.gray};
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;
