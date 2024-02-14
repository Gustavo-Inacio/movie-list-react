import PropTypes from 'prop-types'
import DetailedShowDTO from '../../model/dto/DetailedShow.dto';
import { Link } from 'react-router-dom';

const MovieCard = ({
    children, show
}) => {

    const imgStyle = {
        objectFit: 'contain',
        height: 400
    }

    return (
        <Link to={`/show/${show.imdbID}`} className=''>
            <img src={`${show.Poster}`} style={imgStyle} className='h-100'/>
        </Link>
    );
}

MovieCard.propTypes = {
    optionlaChildren : PropTypes.element,
    show: PropTypes.instanceOf(DetailedShowDTO)
}


export default MovieCard;