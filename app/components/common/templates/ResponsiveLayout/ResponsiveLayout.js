/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Header from "components/common/organisms/Header";
import Theme from "styles/theme";

import styledHOC from "lib/styledHOC";
import FooterResponsive from "components/common/organisms/FooterResponsive";
import { handleClevertapLoad } from "lib/utils/googleAnalytics/analyticsApis";
import styles from "./ResponsiveLayout.style";

class Layout extends PureComponent {
  componentDidMount() {
    if (window)
      window.addEventListener("clevertap_loaded", handleClevertapLoad, false);
  }

  renderMetaTags = () => {
    const { metaInfo = {} } = this.props;
    const { title, meta = [], links = [], ogMeta = [] } = metaInfo;
    return (
      <Head>
        {title && <title>{title}</title>}
        {meta.map(({ name, content }) => (
          <meta name={name} content={content} />
        ))}
        {links.map(({ rel, href }) => (
          <link rel={rel} href={href} />
        ))}
        {ogMeta.map(({ property, content }) => (
          <meta property={property} content={content} />
        ))}
      </Head>
    );
  };

  render() {
    const {
      children,
      className,
      getSVG,
      updateHomePageState,
      // eslint-disable-next-line react/prop-types
      user,
      updatePage,
      footerData,
      helpLineNumber,
      isMobile,
      userProfile,
      signUpFooter,
      signUpHeader,
      pageName
    } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <div>
          {this.renderMetaTags()}
          <Header
            helpLineNumber={helpLineNumber}
            user={user}
            updateHomePageState={updateHomePageState}
            getSVG={getSVG}
            updateComp={updatePage}
            userProfile={userProfile}
            signUpHeader={signUpHeader}
            pageName={pageName}
          />
          <div className={className}>{children}</div>
          <FooterResponsive
            getSVG={getSVG}
            user={user}
            footerData={footerData}
            isMobile={isMobile}
            signUpFooter={signUpFooter}
          />
        </div>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  getSVG: PropTypes.func.isRequired,
  updateHomePageState: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  updatePage: PropTypes.string.isRequired,
  footerData: PropTypes.string.isRequired,
  signUpFooter: PropTypes.bool,
  signUpHeader: PropTypes.bool
};

Layout.defaultProps = {
  children: undefined,
  signUpFooter: false,
  signUpHeader: false
};

export default styledHOC(Layout, styles);
