import React, { useState } from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import styles from "./Paragraph.style";

const defaultCharcterLimit = 200;

const Paragraph = props => {
  const { className, children, isReadMore } = props;
  let { charcterLimit } = props;

  charcterLimit = charcterLimit || defaultCharcterLimit;

  const tempBodyText =
    children && children.length > charcterLimit
      ? children.slice(0, charcterLimit)
      : children;
  const [bodyText, setBodyText] = useState(tempBodyText);

  const readMore = () => {
    setBodyText(children);
  };

  const readLess = () => {
    setBodyText(children.slice(0, charcterLimit));
  };

  return (
    <p className={className}>
      {isReadMore ? bodyText : children}
      {isReadMore &&
      children &&
      children.length > charcterLimit &&
      bodyText !== children ? (
        <span onClick={readMore} className="text-view" role="presentation">
          {" "}
          Read More...
        </span>
      ) : (
        ""
      )}
      {isReadMore &&
      children &&
      children.length === bodyText.length &&
      children.length > charcterLimit ? (
        <span onClick={readLess} className="text-view" role="presentation">
          {" "}
          Read Less
        </span>
      ) : (
        ""
      )}
    </p>
  );
};

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isReadMore: PropTypes.bool,
  charcterLimit: PropTypes.number
};

Paragraph.defaultProps = {
  className: "",
  isReadMore: false,
  charcterLimit: 200
};

export default styledHOC(Paragraph, styles);
