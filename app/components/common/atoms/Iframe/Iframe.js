/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import styles from "./Iframe.style";

const IframeTag = props => {
  const { className, url, width, height } = props;

  return (
    <div className={className}>
      <iframe
        src={url}
        title={url}
        width={width}
        height={height}
        allowFullScreen
      />
    </div>
  );
};

IframeTag.propTypes = {
  url: PropTypes.number.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

IframeTag.defaultProps = {
  className: "",
  width: "",
  height: ""
};

export default styledHOC(IframeTag, styles);
