import React from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Span from "components/common/atoms/Span";
import styles from "./CounterCard.style";
import "intersection-observer";

class CounterCard extends React.Component {
  ref = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    };
  }

  componentDidMount() {
    // Create an observer
    this.observer = new IntersectionObserver(
      element => {
        if (element[0].isIntersecting === true) {
          this.intervalId();
        }
      },
      { threshold: [0] }
    );
    this.observer.observe(this.countingRef);
  }

  componentWillUnmount = () => {
    // use intervalId from the state to clear the interval
    clearInterval(this.intervalId);
  };

  timer = () => {
    const { currentCount } = this.state;
    const { cardData } = this.props;
    const numberOnly = ((cardData || {}).count || "").match(/\d+/g);
    const newCount = currentCount + 1;
    if (newCount <= numberOnly) {
      this.setState({ currentCount: newCount });
    } else {
      clearInterval(this.intervalId);
    }
  };

  intervalId = () => {
    setInterval(this.timer, 1);
  };

  render() {
    const { className, cardData, getSVG, svgName } = this.props;
    const { currentCount } = this.state;
    const alphabet = ((cardData || {}).count || "").replace(/[0-9+]/g, "");
    const { countText } = cardData;
    const SvgUser = getSVG(svgName);
    return (
      <div
        className={`${className} flex`}
        // eslint-disable-next-line no-return-assign
        ref={countingRef => (this.countingRef = countingRef)}
      >
        <SvgUser />
        <div className="counter flex">
          <Span tag="strong">
            {(cardData.altText === "hotels" && `${currentCount}${alphabet}+`) ||
              cardData.count}
          </Span>
          <Span tag="span">{countText}</Span>
        </div>
      </div>
    );
  }
}

CounterCard.propTypes = {
  cardData: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
  getSVG: PropTypes.func.isRequired,
  svgName: PropTypes.number.isRequired
};

CounterCard.defaultProps = {
  className: ""
};

export default styledHOC(CounterCard, styles);
