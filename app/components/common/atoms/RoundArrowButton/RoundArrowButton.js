import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styledHOC from "lib/styledHOC";

import styles from "./RoundArrowButton.style";

const RoundArrowButton = ({
  className,
  children,
  type,
  arrowNext,
  arrowPrev,
  onClick,
  ...others
}) => {
  const buttonClass = classnames({
    arrowNext,
    arrowPrev
  });

  return (
    /* eslint-disable react/button-has-type */
    <button
      className={`${className} ${buttonClass}`}
      type={type}
      onClick={() => onClick()}
      {...others}
    >
      {children}
    </button>
  );
};

RoundArrowButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  arrowNext: PropTypes.bool,
  arrowPrev: PropTypes.bool
};

RoundArrowButton.defaultProps = {
  type: "button",
  onClick: () => {},
  arrowPrev: false,
  arrowNext: false
};

export default styledHOC(RoundArrowButton, styles);
