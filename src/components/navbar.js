import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-around bg-cyan w-full mx-0 my-0">
      <div className="flex items-center mr-4">
        <Image
          src="/favicon.ico"
          height={40}
          width={40}
          alt="logo"
          placeholder="Citizen News"
        />
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
      </div>

      <ul className="flex space-x-4 text-white">
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
