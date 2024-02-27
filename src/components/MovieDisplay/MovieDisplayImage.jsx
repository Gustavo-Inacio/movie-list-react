import PropTypes from 'prop-types';

export default function MovieDisplayImage({
    src
}) {

    return (
        <img src={src} alt="" />
    )
}

MovieDisplayImage.propTypes = {
    src : PropTypes.string
}