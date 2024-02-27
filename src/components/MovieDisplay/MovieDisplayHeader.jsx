import PropTypes from 'prop-types';
import DetailedShowDTO from '../../model/dto/DetailedShow.dto';

export default function MovieDisplayHeader({
    detailedShowDTO
}) {

    return (
        <section className='flex flex-col w-full h-full mt-100   '>
            <div>
                <h1 className='text-6xl font-bold'>{detailedShowDTO.Title}</h1>
                <span>Year: {detailedShowDTO.Year}</span>
            </div>
            <div className='mt-10'>
                <p>Genres: {detailedShowDTO.Genre}</p> 
                <p>Duration: {detailedShowDTO.Runtime}</p> 
            </div>
            <div className='mt-10'>
                <p className='text-2xl font-bold'>Rating</p> 
                <p>{detailedShowDTO.imdbRating}</p> 
            </div>
        </section>
    )
}

MovieDisplayHeader.propTypes = {
    detailedShowDTO : PropTypes.instanceOf(DetailedShowDTO)
}