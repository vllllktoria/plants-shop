import styled from "styled-components";
import {Color} from "../../../shared/constants/Color";

export const MainBanner = styled.div`
  display: flex;
  margin: 0 auto;
  height: 512px;
  width: 93%;
  background-color: ${Color.blue};
  border-radius: 24px;
  overflow: hidden;
`;

export const SearchPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  gap: 48px;
  padding-left: 48px;
  padding-top: 48px;
`;

export const MainSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 449px;
  height: 64px;
  border-radius: 12px;
  background-color: ${Color.white};
`;

export const SearchText = styled.span`
  margin: 18px;
  color: ${Color.gray};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: ${Color.blue};
  border-radius: 12px;
  outline: none;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BannerTitle = styled.span`
  width: 500px;
  color: ${Color.black};
  font-size: 64px;
  font-weight: 800;
  line-height: 64px;
`;

export const BannerStats = styled.div`
  display: flex;
  gap: 48px;
`;

export const StatsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StatsNumber = styled.span`
  color: ${Color.black};
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
`;

export const StatsName = styled.span`
  color: ${Color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
`;

export const StatsInfoLine = styled.div`
  width: 1px;
  height: 70px;
  background-color: ${Color.black};
`;

export const ArrowToRight = styled.div`
  position: relative;
  top: 63%;
  transform: rotate(-2deg);
`;

export const ArrowToBottom = styled.div`
  position: relative;
  top: 3%;
  left: -2%;
  transform: rotate(-2deg);
`;

export const PictureBackground = styled.div`
  width: 70%;
  height: 80%;
  position: relative;
  top: 21%;
  border-radius: 200px 200px 0 200px;
  background-color: ${Color.black};
`;

export const PlantImage = styled.img`
  width: 411px;
  height: 513px;
`;

export const PlantImageContainer = styled.div`
  position: relative;
  top: -24%;
  left: 10%;
`;
