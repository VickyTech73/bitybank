import GoToHome from "./GoToHome";
const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <GoToHome />
        </div>
     );
}
 
export default NotFound;