import CustomNavLink from "./CustomNavLink";

const Navigation = () => {
    return (
        <ul className="list-none flex">
            <li>
                <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li>
                <CustomNavLink to="/movies">Movies</CustomNavLink>
            </li>
            <li>
                <CustomNavLink to="/tv-shows">Tv Shows</CustomNavLink>
            </li>
        </ul>
    );
}

export default Navigation