import React from "react";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import Paragraph from "components/common/atoms/Paragraph";
import Button from "components/common/atoms/Button";
import ClientCount from "components/common/atoms/ClientCount";
import GrowBusinessStyle from "./GrowBusiness.style";
import { agentNetworkSvgMapper } from "./GrowBusiness.config";

const GrowBusiness = props => {
  const {
    getSVG,
    agentNetwork: {
      data: { data }
    },
    scrollToTop
  } = props;
  return (
    <GrowBusinessStyle>
      <div className="container flex vertical-center space-between">
        <div className="grow-business-parent">
          <Heading tag="h2" type="h1">
            Grow Your Business
          </Heading>
          <Paragraph>
            Be a part travel agent network that promises a faster growth of your
            business.
          </Paragraph>
          <Button
            onClick={() => {
              if (scrollToTop) scrollToTop();
            }}
          >
            Register Now
          </Button>
        </div>
        {data.map(({ companyType, icon, number }) => {
          return (
            <ClientCount
              getSVG={getSVG}
              count={parseInt(number, 10)}
              text={companyType}
              svgName={agentNetworkSvgMapper[icon]}
            />
          );
        })}
      </div>
    </GrowBusinessStyle>
  );
};

GrowBusiness.propTypes = {
  getSVG: PropTypes.func,
  scrollToTop: PropTypes.func,
  agentNetwork: PropTypes.instanceOf(Object).isRequired
};

GrowBusiness.defaultProps = {
  getSVG: () => {},
  scrollToTop: () => {}
};

export default GrowBusiness;
