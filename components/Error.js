import { IMG_ERROR } from "../utils/constants";
import { useRouteError, Link } from "react-router"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing and shoe ot in the UI
  const err = useRouteError();
  return (
    <div className="error-page">
      <img className="error-img" src={IMG_ERROR} alt="Error Image" />
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data"> {err.data}</h3> {/* We can use {err.statusText} to status as NotFound */} 
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;