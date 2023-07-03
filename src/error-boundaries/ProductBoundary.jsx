import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ProductBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <h2>Oops... Product Not Found</h2>;
      case 401:
        return <h2>Unauthorized</h2>;
      case 400:
        return <h2>Something Wrong with request</h2>;
      case 500:
        return <h2>Internal Error</h2>;
    }

    return <h2>Something Wrong...</h2>;
  }
};
