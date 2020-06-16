import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styledHOC from "lib/styledHOC";
import styles, { vanillaStyles } from "./Button.style";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      spanStyles: {},
      count: 0
    };
    this.bounce = () => {};
  }

  initializeState = () => {
    return {
      spanStyles: {},
      count: 0
    };
  };

  showRipple = e => {
    let { count } = this.state;
    const { spanStyles } = this.state;
    const { currentTarget: rippleContainer, pageX, pageY } = e;
    const { offsetWidth: size } = rippleContainer;
    const pos = rippleContainer.getBoundingClientRect();
    const x = pageX - pos.x - size / 2;
    const y = pageY - pos.y - size / 2;
    const spanStylesNew = {
      top: `${y}px`,
      left: `${x}px`,
      height: `${size}px`,
      width: `${size}px`
    };
    count += 1;
    this.setState({
      spanStyles: { ...spanStyles, [count]: spanStylesNew },
      count
    });
  };

  renderRippleSpan = () => {
    const { spanStyles = {} } = this.state;
    const spanArray = Object.keys(spanStyles);
    if (spanArray && spanArray.length > 0) {
      return spanArray.map((key, index) => {
        return (
          <span
            // eslint-disable-next-line
            key={`spanCount_${index}`}
            className=""
            style={{ ...spanStyles[key] }}
          />
        );
      });
    }
    return null;
  };

  cleanUp = () => {
    const initialState = this.initializeState();
    this.setState({ ...initialState });
  };

  callCleanUp = (cleanup, delay) => {
    if (this) clearTimeout(this.bounce);
    this.bounce = setTimeout(() => {
      cleanup();
    }, delay);
  };

  render() {
    const {
      className,
      children,
      type,
      secondary,
      tertiary,
      disabled,
      onClick,
      small,
      action,
      setRefs,
      ...others
    } = this.props;
    const buttonClass = classnames({
      "secondary-btn": secondary,
      "tertiary-btn": tertiary,
      "disabled-btn": disabled,
      "action-btn": action,
      "btn-small": small
    });

    return (
      /* eslint-disable react/button-has-type */
      <button
        ref={node => {
          setRefs(node);
        }}
        className={`${className} ${buttonClass}`}
        type={type}
        disabled={disabled}
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          return onClick(e);
        }}
        {...others}
      >
        {children}
        {/* eslint-disable-next-line */}
        <span
          className="rippleContainer"
          onMouseDown={this.showRipple}
          onMouseUp={this.callCleanUp(this.cleanUp, 2000)}
        >
          {this.renderRippleSpan()}
        </span>
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  action: PropTypes.bool,
  onClick: PropTypes.func,
  setRefs: PropTypes.func
};

Button.defaultProps = {
  type: "button",
  secondary: false,
  tertiary: false,
  disabled: false,
  small: false,
  action: false,
  onClick: () => {},
  className: "",
  setRefs: () => {}
};

export const ButtonVanilla = styledHOC(Button, vanillaStyles);
export default styledHOC(Button, styles);
