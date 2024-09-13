import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status >= 400) {
    return (
      <div>
      
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
          Go ahead and email {error.data.hrEmail} if you feel like this is a
          mistake.
        </p>
      </div>
    );
  }

  throw error;
};
export default ErrorBoundary;
