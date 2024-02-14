import { BrowserRouter } from "react-router-dom";
import PropTypes from 'prop-types';

function CustomRouter({children}) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default CustomRouter;


CustomRouter.propTypes = {
    children : PropTypes.element
}