"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchBar";
import { getSearch } from "@/api/routes";

function NewsPage({ headlines }) {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <main className="flex max-h-screen flex-col items-center p-10 overflow-auto">
      <div className="pt-20 flex flex-col items-center justify-between">
        <h2 className="text-3xl font-bold text-white-800">Headlines</h2>

        <SearchBar />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {headlines.map((headline, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md">
              {/* Render headline */}
              <h2 className="text-black font-sans text-lg py-2">
                {headline.title}
              </h2>
              <div className="flex flex-col items-center sm:flex-row">
                {headline.urlToImage && (
                  <div className="w-full sm:w-1/2">
                    <Image
                      loader={imageLoader}
                      src={headline.urlToImage}
                      alt={headline.title}
                      layout="responsive"
                      width={500}
                      height={200}
                      className="rounded-md mb-2 object-cover w-full overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    />
                  </div>
                )}

                <div className="w-full sm:w-1/2 sm:pl-4">
                  <p className="text-gray-500 text-sm">
                    {headline.description}
                  </p>
                  <Link
                    href={headline.url}
                    className="text-blue-700 underline hover:text-black"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {headlines.length === 0 && (
          <div className="flex justify-center items-center bg-gray-300 w-48 h-48">
            <p className="text-gray-500">No headlines available</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default NewsPage;
