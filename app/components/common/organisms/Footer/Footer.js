import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import FooterWhiteBox from "components/common/molecules/FooterWhiteBox";
import FooterSiteMap from "components/common/molecules/FooterSiteMap/FooterSiteMap";
import FooterImages from "components/common/molecules/FooterImages";
import FooterPayment from "components/common/molecules/FooterPayment";
import FooterHotelsLink from "components/common/molecules/FooterHotelsLink";
import styles from "./Footer.style";

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

const locationData = [
  "nearme",
  "ooty",
  "Bangalore",
  "kolkata",
  "patna",
  "indore",
  "Jaipur",
  "Ahmedabad",
  "Goa",
  "Udaypur",
  "Pune",
  "Gangatok",
  "chandigarh",
  "Amritsar",
  "Delhi",
  "Dehradun",
  "Mumbai",
  "Manali",
  "Hyderabad",
  "lucknow",
  "Coimbatore",
  "gurgaon",
  "chennai",
  "Noida"
];

const paragraph =
  "We are the fastest growing budget hotel brand in India with over 10,000+ rooms in 400+ hotels across 40+ cities in India. All our rooms and hotel properties are spacious, stylish, and contemporary, and are fitted with all modern amenities so that you have a relaxed and consistent travel experience. Because we believe in going the extra mile to ensure you have a delightful stay at the best-price, wherever you go. Most of our hotel properties are located close to business hubs or popular tourist sites and easily accessible by public transport, so you don’t have to waste time or money in traveling to your place of business. But what makes us so Fab? Our team of highly enthusiastic and experienced professionals who work around the clock to ensure you get the best sleep after a long day on the road. You don’t have to take our word for it. Just read what over 200,000+ happy customers have to say. Or better yet, book a stay with us and experience our services and hospitality for yourself. Doesn’t matter where you travel to - Whether it’s New Delhi or Ooty. With FabHotels, you will #StayFab, always!";

const Footer = props => {
  // eslint-disable-next-line react/prop-types
  const {
    className,
    footerData = {},
    getSVG,
    user,
    svgLoaded,
    pageName
  } = props;
  const { footer = {} } = footerData;

  const SiteMapRepeater = mockData.map(siteMap => (
    <FooterSiteMap
      anchorList={siteMap.Anchorlist}
      headingText={siteMap.heading}
      pageName={pageName}
    />
  ));
  return (
    <footer className={className}>
      <FooterWhiteBox className="white-box" />
      <div className="container">
        <div className="link-wrapper flex">
          <div className="sitemap">
            <div className="flex link-sec">{SiteMapRepeater}</div>
            <FooterPayment getSVG={getSVG} />
          </div>
          <FooterImages
            svgLoaded={svgLoaded}
            user={user}
            getSVG={getSVG}
            pageName={pageName}
          />
        </div>

        <FooterHotelsLink
          hotelsLocation={locationData}
          locationHeading="Book our hotels in all these cities"
          descHeading="FabHotels is Best Reviewed Hotel Chain in India"
          paragraph={paragraph}
          compData={footer}
        />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  footerData: PropTypes.string.isRequired
};

export { Footer as FooterVanilla };
export default styledHOC(Footer, styles);
