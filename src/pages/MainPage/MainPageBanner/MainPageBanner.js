import React from 'react';

import {SearchIcon} from "../../../shared/components/icons/MainPageIcons/SearchIcon";
import {ArrowToRight} from "../../../shared/components/icons/MainPageIcons/ArrowToRight";
import {ArrowToBottom} from "../../../shared/components/icons/MainPageIcons/ArrowToBottom";
import plantImage from "../../../shared/components/images/Plant.png";

import * as Styles from "../MainPageBanner/MainPageBanner.styles";

export const MainPageBanner = () => {
    return (
        <Styles.MainBanner>
            <Styles.SearchPanel>
                <Styles.BannerInfo>
                    <Styles.BannerTitle>
                        Buy your
                        dream plants
                    </Styles.BannerTitle>
                    <Styles.BannerStats>
                        <Styles.StatsInfo>
                            <Styles.StatsNumber>
                                50+
                            </Styles.StatsNumber>
                            <Styles.StatsName>
                                Plant Species
                            </Styles.StatsName>
                        </Styles.StatsInfo>
                        <Styles.StatsInfoLine/>
                        <Styles.StatsInfo>
                            <Styles.StatsNumber>
                                100+
                            </Styles.StatsNumber>
                            <Styles.StatsName>
                                Customers
                            </Styles.StatsName>
                        </Styles.StatsInfo>
                    </Styles.BannerStats>
                </Styles.BannerInfo>
                <Styles.MainSearch>
                    <Styles.SearchText>
                        What are you looking for?
                    </Styles.SearchText>
                    <Styles.SearchButton>
                        <SearchIcon/>
                    </Styles.SearchButton>
                </Styles.MainSearch>
            </Styles.SearchPanel>
            <Styles.ArrowToRight>
                <ArrowToRight/>
            </Styles.ArrowToRight>
            <Styles.PictureBackground>
                <Styles.PlantImageContainer>
                    <Styles.PlantImage src={plantImage} />
                </Styles.PlantImageContainer>
            </Styles.PictureBackground>
            <Styles.ArrowToBottom>
                <ArrowToBottom/>
            </Styles.ArrowToBottom>
        </Styles.MainBanner>
    );
};