import React from "react";
import Heading from "components/common/atoms/Heading";
import Paragraph from "components/common/atoms/Paragraph";
import PropTypes from "prop-types";
import StyledCompanyBenefitCard from "./CompanyBenefitCard.style";

const CompanyBenefitCard = props => {
  const { heading, para, getSVG, svgKey } = props;
  const BenefitSVG = getSVG(svgKey);
  return (
    <StyledCompanyBenefitCard>
      <BenefitSVG />
      <Heading tag="h3" type="h3">
        {heading}
      </Heading>
      <Paragraph>{para}</Paragraph>
    </StyledCompanyBenefitCard>
  );
};

CompanyBenefitCard.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  svgKey: PropTypes.string,
  getSVG: PropTypes.func
};

CompanyBenefitCard.defaultProps = {
  svgKey: "",
  getSVG: () => {}
};

export default CompanyBenefitCard;
