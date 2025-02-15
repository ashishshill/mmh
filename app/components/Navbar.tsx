import { Link } from "@remix-run/react";
import "../styles/navbar.css";

const Navbar = () => {
  const categories = [
    {
      name: "Mendi",
      link: "/shop",
    },
    {
      name: "Sports",
      link: "/shop",
    },
  ];

  return (
    <nav className="w-full z-50 top-0 py-3">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left Section: Menu */}
        <div className="flex items-center space-x-6">
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
            <span className="sr-only">Open main menu</span>
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <div className="hidden md:flex space-x-6">
            <Link className="text-gray-700 hover:text-black" to="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-black" to="/shop">
              Shop
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-black focus:outline-none flex items-center">
                Categories
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                {categories.map((category, index) => (
                  <li key={index} className="relative group">
                    <Link
                      to={category.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                    {/* <ul className="absolute left-48 top-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subcategory.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {subcategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Center Section: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link className="flex items-center font-bold text-gray-800 text-xl" to="/">
            <svg
              className="fill-current text-gray-800 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
            </svg>
            MMH
          </Link>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4">
          <Link className="text-gray-700 hover:text-black" to="/profile">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="7" r="3" />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
          </Link>
          <Link className="text-gray-700 hover:text-black" to="/cart">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;