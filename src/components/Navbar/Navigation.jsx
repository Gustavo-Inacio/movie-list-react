import CustomNavLink from "./CustomNavLink";

const Navigation = () => {
    return (
        <ul className="list-none flex">
            <li>
                <CustomNavLink to="/">Home</CustomNavLink>
            </li>
        </ul>
    );
}

export default Navigation