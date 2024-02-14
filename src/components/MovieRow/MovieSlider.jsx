
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import PropTypes from 'prop-types'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './a.css';

// import required modules
import { Pagination } from 'swiper/modules';

export const MovieSlider = ({movieList}) => {

    // const [movieListState, setMovieListState] = useState([]);

    // useEffect(() => {

    // }, []);

  return (
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-72"
      >
        {movieList.map((movie) => {
            return (
                <SwiperSlide key={movie.imdbID}>{movie.Title}</SwiperSlide>
            );
        })}
      </Swiper>
  );
}

MovieSlider.propTypes = {
    movieList : PropTypes.array,
}

export default MovieSlider;