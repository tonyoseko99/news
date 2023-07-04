import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-around bg-orange-400 text-white w-full p-5 fixed z-0">
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

      <ul className="flex space-x-4 text-black">
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

        <li>
          <Link href="/login" className="hover:text-white">
            Login / Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
