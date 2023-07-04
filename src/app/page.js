"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getHeadlines } from "@/api/routes";

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
      <main className="flex max-h-screen flex-col items-center p-10">
        <div className="pt-10">
          <h2>Welcome to Citizen News</h2>
          <p className="text-center">
            This is a news site that uses the News API to fetch the latest news
            articles from around the world.
          </p>
          {/* articles as a list */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {headlines.map((headline, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-xl font-bold">{headline.title}</h3>
                <div className="flex justify-center">
                  {headline.urlToImage ? (
                    <Image
                      src={headline.urlToImage}
                      alt={headline.title}
                      width={500}
                      height={300}
                    />
                  ) : (
                    <div>No Image</div>
                  )}
                  <p className="text-sm">{headline.description}</p>
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
