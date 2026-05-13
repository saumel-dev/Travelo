import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className = "" }) => {
    const pathName = usePathname();
    const isActive = href === "/"
        ? pathName === "/"
        : pathName.startsWith(href);
    return (
        <Link className={`no-underline transition-all duration-200
                ${isActive
                ? "text-sky-400 scale-105"
                : "text-black hover:text-sky-400"} 
                ${className}`} href={href}>{children}</Link>
    );
};

export default NavLink;