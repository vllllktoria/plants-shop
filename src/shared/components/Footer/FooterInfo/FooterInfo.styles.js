import styled from "styled-components";

import {Color} from "../../../constants/Color";

export const FooterMainInfo = styled.div`
  padding: 48px 97px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterTitle = styled.span`
  color: ${Color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const FooterSubtitle = styled.span`
  width: 189px;
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const FooterContacts = styled.div`
  display: flex;
  gap: 24px;
`;

export const ContactItem = styled.div`
    cursor: pointer;
`;