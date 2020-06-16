import React from "react";
import PropTypes from "prop-types";
import styleHOC from "lib/styledHOC";
import styles from "./IconText.style";
import Span from "../Span";

const IconText = props => {
  const { className, nameText } = props;
  return (
    <Span tag="span" className={className}>
      {nameText}
    </Span>
  );
};

IconText.propTypes = {
  className: PropTypes.string,
  nameText: PropTypes.string.isRequired
};

IconText.defaultProps = {
  className: ""
};

export default styleHOC(IconText, styles);
