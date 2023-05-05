import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../features/restaurants/components/restaurant-info-card";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: 10px;
`;

const RestaurantListContainer = styled.View`
  flex: 1px;
  background-color: white;
  padding: 10px;
`;

export const Home = () => {
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </>
  );
};
