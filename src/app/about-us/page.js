import React from "react";
import Navbar from "@/components/navbar";

function Page() {
  return (
    <>
      <Navbar />
      <div className="flex max-h-screen flex-col items-center p-10 overflow-auto">
        <div className="pt-20">
          <h2 className="text-2xl text-center text-orange-700">About Us</h2>
          {/* About us section */}
          <p className="text-white text-lg leading-50 w-50">
            Citizen News is a news website that provides the latest news from
            all over the world. We provide news from different categories
            including sports, entertainment, business, health, science and
            technology. We also provide news from different countries. We
            provide news from the United States, Canada, United Kingdom,
            Australia, India, China, Japan, South Korea, Russia, Germany,
            France, Italy, Spain, Brazil, Mexico, Argentina, South Africa,
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
