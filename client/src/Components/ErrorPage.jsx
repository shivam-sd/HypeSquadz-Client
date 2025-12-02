import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>404 – Page Not Found | Your Website Name</title>

        <meta
          name="description"
          content="This page does not exist. Visit our homepage to continue exploring our website."
        />
        <meta name="robots" content="noindex, follow" />

        <meta property="og:title" content="404 – Page Not Found" />
        <meta
          property="og:description"
          content="Sorry, we couldn't find the page you're looking for."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-400">404</p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Page Not Found
          </h1>

          <p className="mt-6 text-lg text-gray-400 sm:text-xl">
            Sorry, we couldn’t find the page you're looking for.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/"
              className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400 duration-200"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
