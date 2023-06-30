import React from "react";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex items-center justify-between">
        <div className="flex" >
          <div>Logo</div>

          <input
            className="bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 md:mr-0"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="flex">
          <h3 className="prose-lg">
            contact us
          </h3>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
            </button>

              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign Up
            </button>
          </div>


      </div>
    </header>
  );
}
