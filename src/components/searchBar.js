"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getSearch } from "@/api/routes";

function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch({ q: searchItem })
      .then((data) => {
        console.log(data.articles);
        setSearchResults(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    console.log(`searchItem: ${searchItem}`);
  };

  return (
    <div className="flex flex-col justify-center items-end">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for news"
          className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none text-black max-w-md text-center w-full"
          value={searchItem}
          onChange={handleChange}
        />
      </form>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((searchResult, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md">
              {/* Render searchResult */}
              <h2 className="text-black font-sans text-lg py-2">
                {searchResult.title}
              </h2>
              <div className="flex justify-center">
                <div className="flex flex-col h-48">
                  {searchResult.urlToImage && (
                    <Image
                      loader={imageLoader}
                      src={searchResult.urlToImage}
                      alt={searchResult.title}
                      layout="responsive"
                      width={500}
                      height={200}
                      className="rounded-md mb-2 object-cover w-full sm:h-64 md:h-80 overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    />
                  )}

                  {!searchResult.urlToImage && (
                    <div className="flex justify-center items-center bg-gray-300 w-48 h-48">
                      <p className="text-gray-500">No image available</p>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 text-sm px-2">
                  {searchResult.description}
                </p>
              </div>
              <Link
                href={searchResult.url}
                className="text-blue-700 underline hover:text-black"
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default SearchBar;
