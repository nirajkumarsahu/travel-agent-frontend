import React from "react";
import Heading from "components/common/atoms/Heading";
import Paragraph from "components/common/atoms/Paragraph";
import PropTypes from "prop-types";
import CustomerBenefitStyle from "./CustomerBenefitCard.style";

const CustomerBenefitCard = props => {
  const {
    className,
    cardData: { title, description, icon },
    getSVG
  } = props;
  const svgMapper = {
    "#centrally-located-properties": "centrallyLocatedProperties",
    "#best-in-class-amenities": "bestInClassAmenities",
    "#well-trained-staff": "wellTrainedStaff",
    "#24-x-7-dedicated-support": "dedicatedSupport"
  };
  const CustomertSvg = getSVG(svgMapper[icon]);
  return (
    <CustomerBenefitStyle className={className}>
      <CustomertSvg />
      <Heading tag="h3" type="h2">
        {title}
      </Heading>

      <Paragraph>{description}</Paragraph>
    </CustomerBenefitStyle>
  );
};

CustomerBenefitCard.propTypes = {
  className: PropTypes.string,
  cardData: PropTypes.instanceOf(Object).isRequired,
  getSVG: PropTypes.func
};

CustomerBenefitCard.defaultProps = {
  className: "",
  getSVG: () => {}
};

export default CustomerBenefitCard;
