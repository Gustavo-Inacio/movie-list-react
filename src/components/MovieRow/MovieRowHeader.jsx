import PropTypes from 'prop-types'

const MovieRowHeader = ({title}) => {
    return (
        <div>
            <h1 className='ml-10 mb-10text-lg text-white' style={{fontSize:35}}>{title}</h1>
        </div>
    ); 
}


MovieRowHeader.propTypes = {
    title : PropTypes.string,
}


export default MovieRowHeader;