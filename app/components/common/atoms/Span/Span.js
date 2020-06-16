import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styledHOC from "lib/styledHOC";
import styles from "./Span.style";

const Span = props => {
  const {
    className,
    children,
    tagInfo,
    tag,
    date,
    fabTitle,
    fabSubTitle,
    popularTitle,
    footerPaymentTitle,
    totalDownloads,
    knowMoreLink,
    click,
    price
  } = props;
  const SpanTag = `${tag}`;
  const spanClass = classnames({
    tagInfo,
    date,
    fabTitle,
    fabSubTitle,
    popularTitle,
    footerPaymentTitle,
    totalDownloads,
    knowMoreLink,
    price
  });
  return (
    <SpanTag onClick={click} className={`${className} ${spanClass}`}>
      {children}
    </SpanTag>
  );
};

Span.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  tagInfo: PropTypes.bool,
  tag: PropTypes.bool,
  date: PropTypes.bool,
  fabTitle: PropTypes.bool,
  fabSubTitle: PropTypes.bool,
  popularTitle: PropTypes.bool,
  footerPaymentTitle: PropTypes.bool,
  totalDownloads: PropTypes.bool,
  knowMoreLink: PropTypes.bool,
  price: PropTypes.bool,
  click: PropTypes.func
};

Span.defaultProps = {
  className: "",
  tagInfo: false,
  tag: false,
  date: false,
  fabTitle: false,
  fabSubTitle: false,
  popularTitle: false,
  footerPaymentTitle: false,
  totalDownloads: false,
  knowMoreLink: false,
  price: false,
  click: () => {}
};

export default styledHOC(Span, styles);
