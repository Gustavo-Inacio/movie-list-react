import Navigation from "./Navigation";
import SearchBar from "./SerachBar";
import PropTypes from 'prop-types'

const Navbar = ({setSearchShowQuery, setIsSearching}) => {
    return (
        <div className='flex items-center h-10 py-7 px-20 bg-neutral-800'>
            <Navigation />
            <SearchBar className="ml-auto" onInputDebounce={setSearchShowQuery} setIsSearching={setIsSearching} />
        </div>
    );
}

Navbar.propTypes = {
    setSearchShowQuery : PropTypes.func,
    setIsSearching : PropTypes.func,
}

export default Navbar;