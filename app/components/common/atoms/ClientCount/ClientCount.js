import React from "react";
import PropTypes from "prop-types";
import ClientCountStyle from "./ClientCount.style";
import { observerConfig } from "./ClientCount.config";

class ClientCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    const { scrollDownRef } = this;
    const observer = new IntersectionObserver(
      this.onObserverTrigger,
      observerConfig
    );
    if (scrollDownRef) {
      observer.observe(scrollDownRef);
    }
  }

  onObserverTrigger = ([entry]) => {
    if (entry.intersectionRatio > 0) {
      const interval = setInterval(() => {
        const { number } = this.state;
        const { count } = this.props;
        if (number < count) {
          this.setState({
            number: number + count / 50
          });
        } else {
          clearInterval(interval);
        }
      }, 10);
    }
  };

  render() {
    const { text, getSVG, svgName, className } = this.props;
    const { number } = this.state;
    const ClientSvg = getSVG(svgName);
    return (
      <ClientCountStyle className={className}>
        <ClientSvg />
        <div
          ref={node => {
            this.scrollDownRef = node;
          }}
          className="travel-agent"
        >
          {number}+ <span className="sub-title">{text}</span>
        </div>
      </ClientCountStyle>
    );
  }
}

ClientCount.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  svgName: PropTypes.string.isRequired,
  getSVG: PropTypes.func
};

ClientCount.defaultProps = {
  className: "",
  getSVG: () => {}
};

export default ClientCount;
