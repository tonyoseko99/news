import React from "react";
import Navbar from "@/components/navbar";

function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center p-10">
      <Navbar />
      <div>
        <h2>Science</h2>
      </div>
    </div>
  );
}

export default Page;
