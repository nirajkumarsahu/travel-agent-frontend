import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";

import cisEnhancer from "lib/cisEnhancer";
import { LOGINPAGE_KEY } from "global/constants";
import Anchor from "components/common/atoms/Anchor";
import SvgService from "lib/utils/svgService";
import styles from "./LoginPage.style";

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    const dynamicFileFetch = () =>
      import(
        /* webpackChunknName:"HomepageSvgs" */ "../../Home/templates/homepageSvgs"
      );
    const eventToRegister = "load";
    const rerenderParent = () => this.forceUpdate();
    const eventTarget = typeof window === "undefined" ? {} : window;
    this.svgService = new SvgService(
      dynamicFileFetch,
      eventToRegister,
      rerenderParent,
      eventTarget
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Anchor to="/home">Home</Anchor>
        {/* <Layout getSVG={this.svgService.getSVG} >
          <h1>Login Page | Travel Agent</h1>
           */}
        {/* <LoginForm /> */}
        {/* </Layout> */}
      </div>
    );
  }
}

LoginPage.propTypes = {
  className: PropTypes.string.isRequired
};

export default cisEnhancer(styledHOC(LoginPage, styles), {
  key: LOGINPAGE_KEY
});
