"use client";
import { useState } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/client";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isUserLoggedIn = true;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // signout function
  const signOut = () => {
    // signOut();
  };

  return (
    <nav className="flex md:flex-row sm:flex-col items-center justify-between bg-orange-400 text-white w-full p-5 fixed z-10">
      <div className="flex items-center mr-4">
        <Image
          src="/favicon.ico"
          height={40}
          width={40}
          alt="logo"
          placeholder="Citizen News"
        />
        <Link href="/" className="hover:text-white ml-5 text-black text-5">
          Home
        </Link>
      </div>

      {/* Toggle button */}
      <button
        className="md:hidden text-white text-2xl z-50 focus:outline-none"
        onClick={handleToggle}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navbar links */}
      <ul
        className={`${
          isOpen ? "flex flex-col md:flex-row" : "hidden"
        } space-y-4 md:space-y-0 md:space-x-4 text-black md:items-center md:flex`}
      >
        <li>
          <Link href="/sports" className="hover:text-white">
            Sports
          </Link>
        </li>
        <li>
          <Link href="/science" className="hover:text-white">
            Science
          </Link>
        </li>
        <li>
          <Link href="/technology" className="hover:text-white">
            Technology
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="hover:text-white">
            About Us
          </Link>
        </li>
        {isUserLoggedIn ? (
          <li className="items-center justify-between md:flex-col">
            <button
              type="button"
              className="hover:text-white flex py-3"
              onClick={signOut}
            >
              Logout
            </button>
            <Link href="/profile" className="hover:text-white">
              Profile
            </Link>
          </li>
          
        ) : (
          <li>
            <Link href="/login" className="hover:text-white">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
