import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 py-4 px-8">
      <div className="flex items-center mr-4">
        <Image src="/favicon.ico" height={40} width={40} alt="logo" />
      </div>
      <ul className="flex space-x-4 text-white">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/sports" className="hover:text-gray-300">
            Sports
          </Link>
        </li>
        <li>
          <Link href="/science" className="hover:text-gray-300">
            Science
          </Link>
        </li>
        <li>
          <Link href="/technology" className="hover:text-gray-300">
            Technology
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="hover:text-gray-300">
            About Us
          </Link>
        </li>

        <li>
          <Link href="/login" className="hover:text-gray-300">
            Login / Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
