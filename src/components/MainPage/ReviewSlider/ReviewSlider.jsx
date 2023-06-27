// Import
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
// import { fetchAllReviews } from 'redux/reviews/operations';
// import { selectAllReviews } from 'redux/reviews/selectors';
import { ReviewCard } from './ReviewCard';
import {
  ReviewsContainer,
  Wrapper,
  ArrowContainer,
} from './ReviewsSlider.styled';
import sprite from 'icons/sprite.svg';

// Slide Right
const SlickRight = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={'slick-prev slick-arrow'}
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arrow-right-slider'}></use>
    </svg>
  </div>
);

// Slide Left
const SlickLeft = ({ currentSlide, slideCount, ...props }) => (
  <div
    {...props}
    className={'slick-next slick-arrow'}
    aria-hidden="true"
    aria-disabled={false}
    type="button"
  >
    <svg height="6" width="39" className="svg-arrow">
      <use href={sprite + '#arrow-left-slider'}></use>
    </svg>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  nextArrow: <SlickRight />,
  prevArrow: <SlickLeft />,
};

// Review Slider
export const ReviewsSlider = () => {
  const reviews = useSelector(selectAllReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch]);

  const lastTenReviews = reviews?.data?.slice(-10);

  return (
    <Wrapper>
      <ReviewsContainer>
        <h2>REVIEWS</h2>
        <Slider className="slider" {...settings}>
          {lastTenReviews?.map(review => (
            <ReviewCard
              key={review._id}
              src={review.owner?.avatarUrl || null}
              num={review.rating}
              name={review.owner?.name || 'John Doe'}
            >
              {review.comment}
            </ReviewCard>
          ))}

          <ReviewCard src={''} num={4} name="Olena Doe">
            GooseTrack is impressive, the calendar view and filter options make
            it easy to stay organized and focused. Highly recommended.
          </ReviewCard>
          <ReviewCard src={''} num={5} name="Alexander Hubbard">
            GooseTrack is incredibly helpful, the sidebar with account
            management, calendar, and filter options make navigation seamless.
            Great for staying organized.
          </ReviewCard>
        </Slider>
        <ArrowContainer />
      </ReviewsContainer>
    </Wrapper>
  );
};