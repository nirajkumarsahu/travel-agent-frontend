import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";

import RoundArrowButton from "components/common/atoms/RoundArrowButton";
import styles from "./Carousel.style";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const {
      dimensions: { noOfSlidesInView }
    } = this.props;
    this.state = {
      prevCounter: 0,
      nextCounter: noOfSlidesInView, // initialize nextCounter to current slides. It increase when slide moves
      transformPx: 0,
      activeDotIndex: 0
    };
  }

  onScroll = () => {
    const {
      dimensions: { mobileWidth }
    } = this.props;
    const { activeDotIndex } = this.state;
    const currPos = this.sliderRef.scrollLeft;
    if (this.lastPos < currPos) {
      const activeDot = Math.round(Math.abs(currPos / mobileWidth));
      if (activeDotIndex !== activeDot) {
        this.setState({
          activeDotIndex: activeDot
        });
      }
    }
    if (this.lastPos > currPos) {
      const activeDot = Math.ceil(Math.abs(currPos / mobileWidth));
      if (activeDotIndex !== activeDot) {
        this.setState({
          activeDotIndex: activeDot
        });
      }
    }
    this.lastPos = currPos;
  };

  slideItems = arrow => {
    const {
      dimensions: { desktopWidth, desktopMarginLeftRight },
      incrementSlides = 1,
      totalSlides
    } = this.props;
    const { prevCounter, nextCounter, transformPx } = this.state;
    switch (arrow) {
      case "prev":
        if (prevCounter > 0) {
          const newIncrementCounter =
            prevCounter - incrementSlides >= 0 ? incrementSlides : prevCounter;
          const moveSlide =
            newIncrementCounter *
            (desktopWidth + desktopMarginLeftRight + desktopMarginLeftRight);
          this.setState({
            prevCounter: prevCounter - newIncrementCounter,
            nextCounter: nextCounter - newIncrementCounter,
            transformPx: transformPx + moveSlide
          });
        }
        break;
      case "next":
        if (totalSlides !== nextCounter) {
          const newIncrementCounter =
            nextCounter + incrementSlides <= totalSlides
              ? incrementSlides
              : totalSlides - nextCounter;
          const moveSlide =
            newIncrementCounter *
            (desktopWidth + desktopMarginLeftRight + desktopMarginLeftRight);
          this.setState({
            prevCounter: prevCounter + newIncrementCounter,
            nextCounter: nextCounter + newIncrementCounter,
            transformPx: transformPx - moveSlide
          });
        }
        break;
      default:
        break;
    }
  };

  render() {
    const { className, totalSlides, children, dotActive } = this.props;
    const {
      prevCounter,
      nextCounter,
      transformPx,
      activeDotIndex
    } = this.state;
    return (
      <div className={className}>
        <div className="parent-div">
          {prevCounter !== 0 && (
            <RoundArrowButton onClick={() => this.slideItems("prev")} arrowPrev>
              prev
            </RoundArrowButton>
          )}
          <div
            ref={node => {
              this.sliderRef = node;
            }}
            className="sliderWrapper"
            onScroll={this.onScroll}
          >
            <div
              className="slider-inner"
              style={{ transform: `translateX(${transformPx}px)` }}
            >
              {children}
            </div>
          </div>
          {totalSlides > nextCounter && (
            <RoundArrowButton onClick={() => this.slideItems("next")} arrowNext>
              next
            </RoundArrowButton>
          )}
        </div>
        <ul className="dots">
          {dotActive &&
            children.map((data, index) => {
              return (
                <li
                  className={index === activeDotIndex ? "active" : undefined}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  className: PropTypes.string.isRequired,
  totalSlides: PropTypes.number.isRequired,
  dimensions: PropTypes.instanceOf(Object).isRequired,
  incrementSlides: PropTypes.number,
  children: PropTypes.node.isRequired,
  dotActive: PropTypes.bool
};

Carousel.defaultProps = {
  incrementSlides: 1,
  dotActive: false
};

export default styledHOC(Carousel, styles);
