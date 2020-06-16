import React from "react";
import PropTypes from "prop-types";

import styledHOC from "lib/styledHOC";
import Heading from "components/common/atoms/Heading";
import Anchor from "components/common/atoms/Anchor";
import BlogCards from "components/features/Home/molecules/BlogCard";
import PopularTag from "components/features/Home/molecules/PopularTag";
import RightArrow from "components/features/Home/atoms/RightArrow";
import styles from "./TravelBlogs.style";

const TravelBlogs = props => {
  const { className, compData: { title, link, data, details } = {} } = props;
  return (
    <div className={className}>
      <div className="container">
        <Heading tag="h2" type="h2">
          {title}
        </Heading>
        <Anchor to={link} className="read-all" target="_blank">
          Read all Travel Blogs
          <RightArrow />
        </Anchor>
        <div className="blog-wrapper">
          <div className="blog-left">
            <BlogCards
              img={data[0].img}
              url={data[0].url}
              landmark={data[0].tags}
              title={data[0].title}
              date={data[0].date}
            />
          </div>
          <div className="blog-right">
            <div className="blog-right-upper">
              <div className="half">
                <BlogCards
                  img={data[1].img}
                  url={data[1].url}
                  landmark={data[1].tags}
                  title={data[1].title}
                  date={data[1].date}
                />
              </div>
              <div className="half">
                <BlogCards
                  img={data[2].img}
                  url={data[2].url}
                  landmark={data[2].tags}
                  title={data[2].title}
                  date={data[2].date}
                />
              </div>
            </div>
            <div className="blog-right-lower">
              <BlogCards
                img={data[3].img}
                url={data[3].url}
                landmark={data[3].tags}
                title={data[3].title}
                date={data[3].date}
              />
            </div>
          </div>
        </div>
        <div className="popular-city-tag">
          {details.map(data => (
            <PopularTag title={data.title} data={data.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

TravelBlogs.propTypes = {
  className: PropTypes.string.isRequired,
  compData: PropTypes.string.isRequired
};

export default styledHOC(TravelBlogs, styles);
