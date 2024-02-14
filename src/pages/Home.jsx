import { Link } from "react-router-dom";
import config from "../datasoruce/config";

export default function Home () {
    console.log(config);
    return (
        <div>
            URLS: {config.BASE_URL}
            <Link to="/other">Other</Link>
        </div>
    );
}