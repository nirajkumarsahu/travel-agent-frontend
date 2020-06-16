/* eslint-disable react/jsx-indent */
import React from "react";
import { createUrl } from "lib/utils";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Link from "next/link";
import styles from "./Anchor.style";

const Anchor = props => {
  const {
    children,
    to,
    className,
    handleLinkClick,
    shallow,
    scroll,
    target,
    extLink,
    title,
    ...others
  } = props;

  const titleTarget = {
    ...(target && { target }),
    ...(title && { title })
  };

  return extLink ? (
    <a
      {...titleTarget}
      // eslint-disable-next-line no-script-url
      href={createUrl(to) || "javascript:void(0);"}
      className={className}
      onClick={e => {
        handleLinkClick(e);
      }}
      {...others}
    >
      {children}
    </a>
  ) : (
    <Link href={to}>
      <a
        className={className}
        {...titleTarget}
        onClick={e => {
          handleLinkClick(e);
        }}
        role="presentation"
      >
        {children}
      </a>
    </Link>
  );
};

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  handleLinkClick: PropTypes.func,
  shallow: PropTypes.bool,
  scroll: PropTypes.bool,
  extLink: PropTypes.bool,
  title: PropTypes.string
};

Anchor.defaultProps = {
  className: "",
  shallow: false,
  scroll: true,
  target: "",
  title: "",
  handleLinkClick: () => {},
  extLink: false
};

export default styledHOC(Anchor, styles);
