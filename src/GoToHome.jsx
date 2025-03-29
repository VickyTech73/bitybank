import { Link } from "react-router-dom";
import "./styles/GoToHome.css";
const GoToHome = () => {
    return ( 
        <div className="cont">
                <Link to="/"><span className="material-symbols-outlined">home</span>Go back to the homepage</Link>
            </div>
     );
}
 
export default GoToHome;