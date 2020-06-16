import React from "react";
import PropTypes from "prop-types";
import Image from "components/common/atoms/Image";
import styledHOC from "lib/styledHOC";
import BrandFeature from "../../atoms/BrandFeature";
import styles from "./BrandCard.style";

const svgMapper = {
  fabhotel: "fabHotelsLogo",
  fabexpress: "fabExpressLogo",
  fabhotelprime: "fabHotelPrimeLogo",
  fabescape: "fabEscapeLogo"
};

const BrandCard = props => {
  const { className, cardData, getSVG } = props;
  const { roomTitle, properties, name, img } = cardData;
  const BrandsLogo = getSVG(svgMapper[name]);
  return (
    <div className={className}>
      {/* TODO - img from the props will be used here */}
      <div className="card">
        <Image imgUrl={img} altText="text" />
        <BrandsLogo />
      </div>
      <div className="brand-text">{roomTitle}</div>
      <ul className="brand-feature">
        {properties &&
          properties.map(feature => {
            const { iconKey, data } = feature;
            return (
              <BrandFeature
                svgKey={iconKey}
                text={data}
                key={iconKey}
                getSVG={getSVG}
              />
            );
          })}
      </ul>
    </div>
  );
};

BrandCard.propTypes = {
  cardData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired
};

export default styledHOC(BrandCard, styles);
