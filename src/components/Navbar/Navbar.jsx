import Navigation from "./Navigation";
import SearchBar from "./SerachBar";

const Navbar  = () => {
    return (
        <div className='flex items-center h-10 py-7 px-20 bg-neutral-800'>
            <Navigation></Navigation>
            <SearchBar className="ml-auto"></SearchBar>
        </div>
    );
}

export default Navbar;