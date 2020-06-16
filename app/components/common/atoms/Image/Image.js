import React, { Component } from "react";
import PropTypes from "prop-types";
import { Figure, Img } from "./Image.style";

class Image extends Component {
  state = {
    isLoading: true
  };

  imgRef = React.createRef();

  componentDidMount() {
    const img = this.imgRef.current;
    if (img && img.complete) {
      this.imageLoaded();
    }
  }

  imageLoaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { imgUrl, altText, className } = this.props;
    const { isLoading } = this.state;
    return (
      <Figure className={isLoading ? "shell-loader" : ""}>
        <Img
          className={className}
          src={imgUrl}
          alt={altText}
          ref={this.imgRef}
          onLoad={this.imageLoaded}
        />
      </Figure>
    );
  }
}

Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  className: PropTypes.string
};

Image.defaultProps = {
  className: ""
};

export default Image;
