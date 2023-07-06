import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchBar";

function NewsPage({ headlines }) {
  // loader function
  const imageLoader = ({ src, width, quality }) => {
    return `src=${src}&w=${width}&q=${quality || 75}`;
  };
  return (
    <main className="flex max-h-screen flex-col items-center p-10 overflow-auto">
      <div className="pt-20">
        <div className="w-full flex justify-between items-center mb-3">
          <h2 className="text-black-700">Welcome to Citizen News</h2>
          {/* search bar */}
          <SearchBar />
        </div>
        {/* articles as a list */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {headlines.map((headline, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-xl font-bold text-orange-500">
                {headline.title}
              </h3>
              <div className="flex justify-center h-3/5">
                {headline.urlToImage ? (
                  <Image
                    loader={imageLoader}
                    src={headline.urlToImage}
                    alt={headline.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    className="rounded-md w-full h-48 text-black"
                  />
                ) : (
                  <div>No Image</div>
                )}
                <p className="text-sm text-black">{headline.description}</p>
              </div>
              <div className="text-right">
                <Link
                  href={headline.url}
                  className="text-blue-500 underline hover:text-blue-800"
                >
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default NewsPage;
