import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sports">
            <a>Sports</a>
          </Link>
        </li>
        <li>
          <Link href="/science">
            <a>Science</a>
          </Link>
        </li>
        <li>
          <Link href="/technology">
            <a>Technology</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login/Signup</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
