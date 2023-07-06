"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import NewsPage from "@/components/newsPage";
import Footer from "@/components/footer";
import { getSports } from "@/api/routes";

function Page() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    getSports()
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
      <NewsPage headlines={headlines} />
      <Footer />
    </>
  );
}

export default Page;
