import React, { useState } from "react";
import logo from "../assets/home/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <div className="bg-white  w-full fixed left-0 top-0 z-[100000]">
            <nav className="max-w-7xl mx-auto py-4 px-8 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <img src={logo} alt="logo" />
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-8 text-gray-400 text-lg font-medium">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-black font-semibold" : "hover:text-blue-500"
                        }
                        to="/"
                    >
                        <li className=" flex items-center gap-2">
                            Home
                        </li>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-black font-semibold" : "hover:text-blue-500"
                        }
                        to="/listings"
                    >
                        <li className=" flex items-center gap-2">
                            Listings
                        </li>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "text-black font-semibold" : "hover:text-blue-500"
                        }
                        to="/about"
                    >
                        <li className=" flex items-center gap-2">
                            About us
                        </li>
                    </NavLink>

                </ul>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex space-x-4 items-center ">


                    <Link to="/auth/register" className="px-4 py-2 bg-white  text-[#4CA32F] ">
                        Log in
                    </Link>
                    <Link to="/auth/login" className="text-white px-4 py-2 rounded-lg bg-[#4CA32F]">
                        Sign up 
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 font-bold text-xl focus:outline-none"
                    >
                        <CiMenuFries />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out z-[10000]`}
                >
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-700 focus:outline-none text-xl absolute top-4 right-4"
                    >
                        <IoClose />
                    </button>
                    <ul className="mt-16 space-y-6 px-6 text-gray-700 text-lg font-medium">
                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-black font-semibold"
                                        : "block hover:text-[#1E1E1E80]"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-black font-semibold"
                                        : "block hover:text-[#1E1E1E80]"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-black font-semibold"
                                        : "block hover:text-[#1E1E1E80]"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "block text-black font-semibold"
                                        : "block hover:text-[#1E1E1E80]"
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className="mt-4 bg-[#003399] rounded-md">
                            <a href="#login" className="block text-gray-700">
                                Request a quote
                            </a>
                        </li>
                        <li>
                            <a
                                href="#signup"
                                className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Reach us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;