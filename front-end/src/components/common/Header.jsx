import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-40">
      <div className="px-6 py-3 flex items-center">
        <Link to="/" className="text-gray-800 font-medium hover:text-blue-600">
          Home
        </Link>
      </div>
    </header>
  );
};

export default Header;
