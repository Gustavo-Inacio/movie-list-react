import PropTypes from 'prop-types';
import DetailedShowDTO from '../../model/dto/DetailedShow.dto';
import MovieDisplayImage from './MovieDisplayImage';
import MovieDisplayHeader from './MovieDisplayHeader';
import MovieDisplayDescription from './MovieDisplayDescription';

export default function MovieDisplay({
    detailedShowDTO
}) {

    return (
            <section className='flex p-10 w-full h-full flex-row flex-nowrap mx-auto' style={{
                maxWidth: 1000  
            }}>
                <MovieDisplayImage src={detailedShowDTO.Poster} />
                <div className='flex text-white flex-col ml-10'>
                    <MovieDisplayHeader detailedShowDTO={detailedShowDTO} />
                    <MovieDisplayDescription detailedShowDTO={detailedShowDTO} />
                </div>
            </section>
    )
}

MovieDisplay.propTypes = {
    detailedShowDTO : PropTypes.instanceOf(DetailedShowDTO)
}