
import { Swiper, SwiperSlide } from 'swiper/react';

import PropTypes from 'prop-types'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './a.css';
import './movieSlider.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import { Navigation } from 'swiper/modules';
import MovieCard from '../MovieCard/MovieCard';
import { useRef } from 'react';

export const MovieSlider = ({movieList}) => {
  const nextNavigator = useRef(null);
  const beforeNavigator = useRef(null);

  return (
    <div className='movie-slider'>
      <button ref={beforeNavigator} className='arrowLeft'>
        <ArrowBackIosNewOutlinedIcon sx={{ color: "#fff"}} fontSize="large"/>
      </button>
      <button ref={nextNavigator} className='arrowRight'>
          <ArrowForwardIosOutlinedIcon  sx={{ color: "#fff" }} fontSize="large"/>
      </button>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        navigation={{
          nextEl: nextNavigator.current,
          prevEl: beforeNavigator.current,
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = beforeNavigator.current
            swiper.params.navigation.nextEl = nextNavigator.current
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movieList.map((movie) => {
            return (
                <SwiperSlide key={movie.imdbID} className='w-fit'>
                  <MovieCard show={movie} ></MovieCard>
                </SwiperSlide>
            );
        })}
      </Swiper>

    </div>
  );
}

MovieSlider.propTypes = {
    movieList : PropTypes.array,
}

export default MovieSlider;