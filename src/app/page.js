"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Navbar />
      <div className="pt-10">
        <h2>Welcome to Citizen News</h2>
      </div>
    </main>
  );
}
