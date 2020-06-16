import React from "react";
import PropTypes from "prop-types";
import Heading from "components/common/atoms/Heading";
import ClientCount from "components/common/atoms/ClientCount";
import Carousel from "components/common/molecules/Carousel";
import LoginBannerStyle from "./LoginBanner.style";
import { carouselCss, agentNetworkSvgMapper } from "./LoginBanner.config";

const LoginBanner = props => {
  const { getSVG, className, agentNetwork } = props;
  const { title } = agentNetwork;
  const {
    data: { title: desc, data }
  } = agentNetwork;
  return (
    <LoginBannerStyle className={className}>
      <Heading tag="h1" type="h1">
        {title}
      </Heading>
      <Heading className="hidden-phone" tag="h2" type="h2">
        {desc}
      </Heading>

      <Carousel
        dotActive
        totalSlides={3}
        dimensions={carouselCss}
        incrementSlides={1}
        className="login-banner-slider"
      >
        {data.map(({ companyType, icon, number }) => {
          return (
            <ClientCount
              className="child-div"
              getSVG={getSVG}
              count={parseInt(number, 10)}
              text={companyType}
              svgName={agentNetworkSvgMapper[icon]}
            />
          );
        })}
      </Carousel>
    </LoginBannerStyle>
  );
};

LoginBanner.propTypes = {
  getSVG: PropTypes.func,
  className: PropTypes.string,
  agentNetwork: PropTypes.instanceOf(Object).isRequired
};

LoginBanner.defaultProps = {
  getSVG: () => {},
  className: ""
};

export default LoginBanner;
