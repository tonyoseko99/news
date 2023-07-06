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
      <div className="pt-20">
        <div className="w-full flex justify-between items-center mb-3">
          <h2 className="text-black-700">Welcome to Citizen News</h2>
          <SearchBar />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {headlines.map((headline, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-md">
              {/* Render headline */}
              <h2 className="text-orange-700 font-sans text-lg">
                {headline.title}
              </h2>
              <div className="flex justify-center">
                {headline.urlToImage && (
                  <Image
                    loader={imageLoader}
                    src={headline.urlToImage}
                    alt={headline.title}
                    width={300}
                    height={200}
                  />
                )}

                {!headline.urlToImage && (
                  <div className="flex justify-center items-center bg-gray-300 w-48 h-48">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
              </div>
              <p className="text-gray-500 text-sm">{headline.description}</p>
              <Link
                href={headline.url}
                className="text-blue-700 underline hover:text-black"
              >
                Read More
              </Link>
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
