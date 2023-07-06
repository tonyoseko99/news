"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NewsPage from "@/components/newsPage";
import { getScience } from "@/api/routes";

function Page() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    getScience()
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
