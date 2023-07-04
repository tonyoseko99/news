import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-around bg-white text-black w-full p-5 fixed">
      <div className="flex items-center mr-4">
        <Image
          src="/favicon.ico"
          height={40}
          width={40}
          alt="logo"
          placeholder="Citizen News"
        />
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
      </div>

      <ul className="flex space-x-4 text-black">
        <li>
          <Link href="/sports" className="hover:text-orange-500">
            Sports
          </Link>
        </li>
        <li>
          <Link href="/science" className="hover:text-orange-500">
            Science
          </Link>
        </li>
        <li>
          <Link href="/technology" className="hover:text-orange-500">
            Technology
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="hover:text-orange-500">
            About Us
          </Link>
        </li>

        <li>
          <Link href="/login" className="hover:text-orange-500">
            Login / Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
