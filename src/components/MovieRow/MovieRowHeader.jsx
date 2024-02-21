import PropTypes from 'prop-types'

const MovieRowHeader = ({title}) => {
    return (
        <div>
            <h1 className='text-lg text-white'>{title}</h1>
        </div>
    ); 
}


MovieRowHeader.propTypes = {
    title : PropTypes.string,
}


export default MovieRowHeader;