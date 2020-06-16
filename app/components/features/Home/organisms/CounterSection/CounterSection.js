import React from "react";
import styledHOC from "lib/styledHOC";
import PropTypes from "prop-types";
import counterData from "./MockData";
import styles from "./CounterSection.style";
import CounterCard from "../../molecules/CounterCard";

const CounterSection = props => {
  const { className, getSVG, compData } = props;
  const Background = getSVG("citiesBackground");
  const svgMapper = {
    noOfCities: "tajmahal",
    noOfHotels: "resortBuilding",
    noOfReviews: "boySmile",
    noOfRooms: "room"
  };
  const counterList = Object.keys(compData || {}).map(key => (
    <CounterCard
      className="counter-card"
      getSVG={getSVG}
      cardData={{ ...counterData[key], count: compData[key] }}
      svgName={svgMapper[key]}
    />
  ));
  return (
    <div className={className}>
      <Background />
      <div className="flex counter-wrap">{counterList}</div>
    </div>
  );
};

CounterSection.propTypes = {
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired,
  compData: PropTypes.string.isRequired
};

CounterSection.defaultProps = {
  className: ""
};

export default styledHOC(CounterSection, styles);
