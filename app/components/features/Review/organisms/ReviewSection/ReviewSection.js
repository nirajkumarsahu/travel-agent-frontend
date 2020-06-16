import React, { useState } from "react";
import PropTypes from "prop-types";
import styledHOC from "lib/styledHOC";
import Heading from "components/common/atoms/Heading";
import GuestReviewTile from "components/features/Review/molecules/GuestReviewTile";
import GuestVideoTile from "components/features/Review/molecules/GuestVideoTile";
import TabMenu from "components/common/organisms/TabMenu";
import styles from "./ReviewSection.style";
import { tabItemsArray, initialActiveTab } from "./ReviewSection.constants";

const ReviewSection = props => {
  const {
    className,
    guestReviewData = {},
    videoReviewData = {},
    fetchGuestReviewDataFunc,
    fetchVideoReviewDataFunc
  } = props;
  const { reviewCount } = guestReviewData || {};
  let { page, totalPages } = guestReviewData;
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const setCurrentTab = id => {
    if (id === "videoReviews" && !Object.keys(videoReviewData).length) {
      fetchVideoReviewDataFunc(1);
    }
    setActiveTab(id);
  };

  const loadMore = () => {
    if (page && page < totalPages) {
      switch (activeTab) {
        case "guestReviews":
          fetchGuestReviewDataFunc(page + 1);
          break;
        case "videoReviews":
          fetchVideoReviewDataFunc(page + 1);
          break;

        default:
          break;
      }
    }
  };

  const data = () => {
    const arr = [];
    switch (activeTab) {
      case "guestReviews": {
        const {
          page: tempPage,
          totalPages: tempTotalPages,
          reviews = []
        } = guestReviewData;
        page = tempPage;
        totalPages = tempTotalPages;
        for (let i = 0; i < reviews.length; i++) {
          arr.push(
            <GuestReviewTile className="review-card" data={reviews[i]} />
          );
        }
        break;
      }
      case "videoReviews": {
        if (videoReviewData && videoReviewData.reviews) {
          const {
            page: tempPage,
            totalPages: tempTotalPages,
            reviews = []
          } = videoReviewData;
          page = tempPage;
          totalPages = tempTotalPages;
          for (let i = 0; i < reviews.length; i++) {
            arr.push(
              <GuestVideoTile className="review-card" data={reviews[i]} />
            );
          }
        }
        break;
      }
      default:
        break;
    }
    return arr;
  };
  return (
    <div className={className}>
      <div className="container">
        <Heading tag="h1" type="h1" className="top-heading">
          {reviewCount}+ Hotel reviews
        </Heading>
        <Heading tag="h2" type="h2">
          Happy and Satisfied Customers speak about us
        </Heading>
        <TabMenu itemsArray={tabItemsArray} setCurrentTab={setCurrentTab} />
        {data()}
      </div>
      {page && page < totalPages ? (
        <div className="load-more">
          <div className="container">
            <span onClick={loadMore} role="presentation">
              Load more reviews
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

ReviewSection.propTypes = {
  className: PropTypes.string,
  guestReviewData: PropTypes.instanceOf(Object).isRequired,
  videoReviewData: PropTypes.instanceOf(Object),
  fetchGuestReviewDataFunc: PropTypes.func.isRequired,
  fetchVideoReviewDataFunc: PropTypes.func.isRequired
};

ReviewSection.defaultProps = {
  className: "",
  videoReviewData: {}
};

export default styledHOC(ReviewSection, styles);
