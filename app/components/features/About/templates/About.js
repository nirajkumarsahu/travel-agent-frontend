import React from "react";
import cisEnhancer from "lib/cisEnhancer";
import { ABOUTPAGE_KEY } from "global/constants";

import Layout from "components/common/templates/Layout";
import initialActions from "./About.actions";
import saga from "./About.saga";
import reducer from "./About.reducer";

const AboutPage = () => (
  <Layout>
    <p>About Page | SBT framework Setup</p>
  </Layout>
);

const mapStateToProps = state => {
  const { aboutPage } = state;
  return {
    data: aboutPage.data
  };
};

export default cisEnhancer(AboutPage, {
  key: ABOUTPAGE_KEY,
  mapStateToProps,
  initialActions,
  saga,
  reducer
});
