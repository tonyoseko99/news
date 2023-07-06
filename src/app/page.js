"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getHeadlines } from "@/api/routes";

// loader function
const imageLoader = ({ src, width, quality }) => {
  return `src=${src}&w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    getHeadlines()
      .then((data) => {
        console.log(data.articles);
        setHeadlines(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <main className="flex max-h-screen flex-col items-center p-10 overflow-auto">
        <div className="pt-20">
          <div className="w-full flex justify-between items-center mb-3">
            <h2 className="text-black-700">Welcome to Citizen News</h2>
            {/* search bar */}
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search for news"
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none text-black max-w-md"
              />
              <button type="submit" className="absolute right-0 top-0">
                <svg
                  className="text-black-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.93 0 3.68-.83 4.9-2.15l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 9.5 9.5a4.5 4.5 0 0 1-4.5 4.5z"
                  />
                </svg>
              </button>
            </div>
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
      <Footer />
    </>
  );
}
