/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Header from "components/common/organisms/Header";
import Theme from "styles/theme";

import styledHOC from "lib/styledHOC";
import Footer from "components/common/organisms/Footer";
import { handleClevertapLoad } from "lib/utils/googleAnalytics/analyticsApis";
import styles from "./Layout.style";

class Layout extends PureComponent {
  componentDidMount() {
    // eslint-disable-next-line
    window.addEventListener("clevertap_loaded", handleClevertapLoad, false);
  }

  // gtag.event({
  //   action: 'submit_form',
  //   category: 'Contact',
  //   label: this.state.message
  // })

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
      pageName,
      isMobile,
      userProfile,
      svgLoaded
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
            pageName={pageName}
            userProfile={userProfile}
          />
          <div className={className}>{children}</div>
          <Footer
            getSVG={getSVG}
            user={user}
            footerData={footerData}
            isMobile={isMobile}
            svgLoaded={svgLoaded}
            pageName={pageName}
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
  footerData: PropTypes.string.isRequired
};

Layout.defaultProps = {
  children: undefined
};

export default styledHOC(Layout, styles);
