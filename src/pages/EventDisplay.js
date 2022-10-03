import { Link } from "react-router-dom";
import landingPage from "./LandingPage";
const eventDisplay = () =>{
    return(
        <div className="Hello">
            <p>Create Event</p>
        <Link to="/create" className="btn">create</Link>

        </div>
    );
};

export default eventDisplay;