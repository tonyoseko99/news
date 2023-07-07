"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getHeadlines } from "@/api/routes";
import NewsPage from "@/components/newsPage";

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
      
      <NewsPage headlines={headlines} />
      <Footer />
    </>
  );
}
