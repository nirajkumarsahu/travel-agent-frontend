import React, { useState } from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import FooterWhiteBox from "components/common/molecules/FooterWhiteBox";
import FooterSiteMap from "components/common/molecules/FooterSiteMap/FooterSiteMap";
import FooterImages from "components/common/molecules/FooterImages";
import FooterPayment from "components/common/molecules/FooterPayment";
import FooterHotelsLinkResponsive from "components/common/molecules/FooterHotelsLinkResponsive";
import Heading from "components/common/atoms/Heading";
import styles from "./FooterResponsive.style";

const mockData = [
  {
    heading: "Fabhotels",
    Anchorlist: [
      {
        url: "/about-us",
        anchorText: "About Us"
      },
      {
        url: "/careers",
        anchorText: "Careers"
      },
      {
        url: "/press",
        anchorText: "Press"
      },
      {
        url: "/blog",
        anchorText: "Travel Blog"
      }
    ]
  },

  {
    heading: "Partner with us",
    Anchorlist: [
      {
        url: "/franchise-enquiry",
        anchorText: "Be our Franchisee"
      },
      {
        url: "/travel-agent",
        anchorText: "Travel Agent"
      },
      {
        url: "/corporate-enquiry",
        anchorText: "Corporate Enquiries"
      }
    ]
  },
  {
    heading: "Policies",
    Anchorlist: [
      {
        url: "/terms-conditions",
        anchorText: "Terms & Conditions"
      },
      {
        url: "/privacy-policy",
        anchorText: "Privacy Policy"
      },
      {
        url: "/cancellation-refunds-policy",
        anchorText: "Cancellation Policy"
      },
      {
        url: "/faqs",
        anchorText: "FAQs"
      }
    ]
  }
];

const mockDataSignup = [
  {
    heading: "Partner with us",
    Anchorlist: [
      {
        url: "/franchise-enquiry",
        anchorText: "Be our Franchisee"
      },
      {
        url: "/travel-agent",
        anchorText: "Travel Agent"
      },
      {
        url: "/corporate-enquiry",
        anchorText: "Corporate Enquiries"
      }
    ]
  },
  {
    heading: "Policies",
    Anchorlist: [
      {
        url: "/terms-conditions",
        anchorText: "Terms & Conditions"
      },
      {
        url: "/privacy-policy",
        anchorText: "Privacy Policy"
      },
      {
        url: "/cancellation-refunds-policy",
        anchorText: "Cancellation Policy"
      }
    ]
  }
];

const FooterResponsive = props => {
  // eslint-disable-next-line react/prop-types
  const {
    className,
    footerData = {},
    getSVG,
    user,
    isMobile,
    signUpFooter,
    svgLoaded
  } = props;
  const { footer = {} } = footerData;
  const [displayList, setListFlag] = useState(false);
  const ArrowWhite = getSVG("arrowWhite");
  const ShieldLine = getSVG("shieldLine");
  const PhoneLine = getSVG("phoneLine");
  const LocationLine = getSVG("locationLine");
  let tempData;
  if (signUpFooter) {
    tempData = mockDataSignup;
  } else {
    tempData = mockData;
  }
  const SiteMapRepeater = tempData.map(siteMap => (
    <FooterSiteMap
      anchorList={siteMap.Anchorlist}
      headingText={siteMap.heading}
    />
  ));
  return (
    <footer className={className}>
      {/* eslint-disable-next-line */}
      <div
        className={`visible-phone book-hotels ${
          displayList ? "footer-open" : ""
        }`}
        onClick={() => setListFlag(!displayList)}
      >
        Book our hotels in all these cities
        <span className="arrowIcon">
          <ArrowWhite />
        </span>
      </div>
      <FooterWhiteBox className="white-box" />
      {(displayList || !isMobile) && (
        <div className="container footer-slide">
          <div className="link-wrapper flex">
            <div className="sitemap">
              <div className="flex link-sec">{SiteMapRepeater}</div>
              <FooterPayment getSVG={getSVG} />
            </div>
            {!signUpFooter ? (
              <FooterImages svgLoaded={svgLoaded} user={user} getSVG={getSVG} />
            ) : (
              <div className="footer-option">
                <div className="about-us">
                  <Heading type="h4" tag="h3">
                    About Fabhotels
                  </Heading>
                  <ul>
                    <li>
                      <ShieldLine />
                      2019 Casa2 Stays Pvt. Ltd. All rights reserved. ©
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <PhoneLine />
                      Plot No 53 and 54, Phase 4, Sub.Major Laxmi Chand Road,
                      Udyog Vihar, Gurugram, Haryana 122022
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <LocationLine />
                      +1 (234) 567 8900
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <FooterHotelsLinkResponsive
            locationHeading="Book our hotels in all these cities"
            descHeading="FabHotels is Best Reviewed Hotel Chain in India"
            compData={footer}
          />
        </div>
      )}
      <div className="container">
        <div className="copyright">
          <p>&#9400; 2019 Casa2 Stays Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

FooterResponsive.propTypes = {
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  footerData: PropTypes.string.isRequired,
  signUpFooter: PropTypes.bool,
  user: PropTypes.instanceOf(Object).isRequired,
  isMobile: PropTypes.bool.isRequired,
  svgLoaded: PropTypes.bool.isRequired
};

FooterResponsive.defaultProps = {
  signUpFooter: false
};

export { FooterResponsive as FooterVanilla };
export default styledHOC(FooterResponsive, styles);
