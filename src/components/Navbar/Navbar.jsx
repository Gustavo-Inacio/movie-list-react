import Navigation from "./Navigation";
import SearchBar from "./SerachBar";
import PropTypes from 'prop-types'

const Navbar = ({setSearchShowQuery}) => {
    return (
        <div className='flex items-center h-10 py-7 px-20 bg-neutral-800'>
            <Navigation></Navigation>
            <SearchBar className="ml-auto" onInputDebounce={setSearchShowQuery} ></SearchBar>
        </div>
    );
}

Navbar.propTypes = {
    setSearchShowQuery : PropTypes.func,
}



export default Navbar;