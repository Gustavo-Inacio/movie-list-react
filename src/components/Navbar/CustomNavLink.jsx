import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const CustomNavLink = ({children, to}) => {
    return (
        <Link to={to} className="text-gray-50 mr-5">{children}</Link>
    );
}

CustomNavLink.propTypes = {
    children : PropTypes.element | PropTypes.string,
    to: PropTypes.string
}


export default CustomNavLink;