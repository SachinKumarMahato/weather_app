import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-teal-500 py-3 ">
      <div className="flex items-center gap-1">
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <p className="capitalize text-gray-100 font-bold ml-4">weather</p>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
