import "./styles/ButtonAnchor.css";
import { Link } from "react-router-dom";

const ButtonAnchor = ({ url, text, bg, fg }) => {
    return ( 
        <div className="button-anchor">
            <Link to={url} style={{
                backgroundColor: bg,
                color: fg
            }} className="button-link">{text}</Link>
        </div>
     );
}
 
export default ButtonAnchor;