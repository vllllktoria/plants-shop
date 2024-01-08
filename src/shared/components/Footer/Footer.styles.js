import styled from "styled-components";

import {Color} from "../../constants/Color";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterMainWrapper = styled.div`
  position: relative;
  left:0;
  bottom:0;
  height: 400px;
  margin-top: 100px;
  background-color: ${Color.blue};
`;


