import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="max-w-screen-xl  mx-auto bg-error bg-cover flex justify-center  h-screen text-center">
      <div className="my-20">
        <h1 className="text-4xl md:text-6xl mb-5 arvo font-bold">404!</h1>
        <p className="text-2xl">Sorry, this page is not available.</p>
        <p className="text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="px-3 py-1 text-xl bg-blue-500 text-white rounded-md font-semibold mt-5">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
