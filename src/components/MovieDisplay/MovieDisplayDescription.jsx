import PropTypes from 'prop-types';
import DetailedShowDTO from '../../model/dto/DetailedShow.dto';

export default function MovieDisplayDescription({
    detailedShowDTO
}) {

    return (
        <section className='flex justify-center w-full h-full mt-10 '>
            <div>
                <h1 className='text-2xl font-bold'>Overview</h1>
                <p>{detailedShowDTO.Plot}</p>
            </div>
        </section>
    )
}

MovieDisplayDescription.propTypes = {
    detailedShowDTO : PropTypes.instanceOf(DetailedShowDTO)
}