import { Link } from "react-router-dom";

const NotFound404 = () => {
    return ( 
        <div className="not-found-404">
            <h2>Sorry</h2>
            <p>That page cannot be found...</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound404;