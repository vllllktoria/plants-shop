import styled from "styled-components";

import {Color} from "../../../constants/Color";

export const FooterNavWrapper = styled.div`
  padding: 48px 97px;
  display: flex;
  gap: 48px;
`;

export const FooterNavItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterNavTitle = styled.span`
  color: ${Color.black};
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

export const FooterNavLink = styled.a`
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    color: ${Color.black};
  }
`;