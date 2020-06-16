import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import styles from "./Heading.style";

const Heading = props => {
  const { className, tag, children } = props;
  const HeadingTag = `${tag}`;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};

Heading.propTypes = {
  className: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default styledHOC(Heading, styles);
