import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status >= 400) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
      </div>
    );
  }

  throw error;
};
export default ErrorBoundary;
