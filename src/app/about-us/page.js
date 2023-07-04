import React from "react";
import Navbar from "@/components/navbar";

function Page() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center p-10">
        <div className="pt-10">
          <h2>About Us</h2>
        </div>
      </div>
    </>
  );
}

export default Page;
