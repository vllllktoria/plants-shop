import styled from "styled-components";
import {Color} from "../../constants/Color";
export const NavbarWrapper = styled.div`
  display: flex;
  gap: 479px;
  align-items: center;
  padding: 48px;
`;

export const NavbarContent = styled.div`
  display: flex;
  gap: 96px;
  align-items: center;
`;

export const NavbarLogo = styled.span`
  color: ${Color.black};
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 48px;
`;

export const LinksItem = styled.a`
  color: ${Color.gray};
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  &:hover{
    color: ${Color.black};
  }
`;

export const NavbarWidgets = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const CartButton = styled.a`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const PersonButton = styled.a`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${Color.black};
`;

export const FilterButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;