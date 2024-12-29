import React, { useRef, useState } from "react";
import MainNavbar from "../navbar/MainNavbar";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    const toggleSearchBar = () => {
        setIsSearchOpen((prevState) => !prevState);
        setTimeout(() => {
            if (searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }, 100);
    };
    return (
        <div className="flex flex-wrap h-auto py-4 px-2 md:px-6 gap-2 lg:px-12 shadow-lg justify-between">
            <img src="/assets/logo.jpg" alt="Logo" className="h-12 w-24" />
            <div className="flex flex-wrap gap-2 items-center w-full sm:w-auto">
            <MainNavbar />
                {!isSearchOpen && (
                    <button
                        className="ml-2 p-2 text-gray-500 bg-gray-200 items-center rounded-full shadow hover:bg-gray-300 focus:outline-none sm:p-1 sm:h-6 md:p-2 md:h-8 lg:p-2 lg:h-8"
                        onClick={toggleSearchBar}
                    >
                        <FaSearch size={20} className="p-1" />
                    </button>
                )}
                {isSearchOpen && (
                    <div className="flex items-center ml-2">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            className="p-2 pl-4 border rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-[#071952] w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-8  text-sm"
                        />
                        <button
                            className="ml-2 p-2 text-gray-500 bg-gray-200 rounded-full shadow hover:bg-gray-300 focus:outline-none sm:p-1 sm:h-6 md:p-2 md:h-8 lg:p-2 lg:h-8"
                            onClick={toggleSearchBar}
                        >
                            <FaSearch size={20} />
                        </button>
                    </div>
                )}
                <button className="px-4 py-2 bg-orange-600 text-white rounded-full shadow hover:bg-orange-600 text-sm">Login</button>
            </div>
        </div>
    )
}
export default Header;