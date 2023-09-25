/** @jsxImportSource @emotion/react */
import React from "react";
import WeatherCard from "./WeatherCard";
import ActivityCard from "./ActivityCard";
import { weatherData, activityData } from "../store/data";
import { sideSpacing, verticalStack } from "../UI/style/styles";


const ContentsList = () => {
  return (
    <div css={[sideSpacing, verticalStack]}>
      <WeatherCard 
        background="#E6EEF5"
        temperature={weatherData.temperature}
        humidity={weatherData.humidity}
      />
      <ActivityCard 
        background="#F4F4F4"
        distance={activityData.distance}
        startTime={activityData.startTime}
        endTime={activityData.endTime}
      />
    </div>
  );
};

export default ContentsList;
