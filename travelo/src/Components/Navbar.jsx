'use client'
import { useState } from "react";
import NavLink from "./NavLink";
import { ThemeSwitch } from "./ThemeSwitch";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="w-full shadow-sm/5">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-start gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <ul className="hidden items-center gap-4 md:flex">
                        <li><NavLink href="/" className="text-[15px]">Home</NavLink></li>
                        <li><NavLink href="/destinations" className="text-[15px]">Destinations</NavLink></li>
                        <li><NavLink href="/add-destinations" className="text-[15px]">Add Destination</NavLink></li>
                    </ul>
                </div>
                <div className="text-2xl font-bold text-sky-400">Travelo</div>
                <ul className="items-center gap-4 flex">
                    <li><NavLink href="/profile" className="text-[15px]">Profile</NavLink></li>
                    <li><NavLink href="/login" className="text-[15px]">Login</NavLink></li>
                    <li><NavLink href="/signup" className="text-[15px]">Sign Up</NavLink></li>
                <ThemeSwitch></ThemeSwitch>
                </ul>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li><NavLink href="/" className="text-[15px]">Home</NavLink></li>
                        <li><NavLink href="/destinations" className="text-[15px]">Destinations</NavLink></li>
                        <li><NavLink href="/my-bookings" className="text-[15px]">My Bookings</NavLink></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;