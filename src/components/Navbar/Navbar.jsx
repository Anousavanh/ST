import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMobileDropdown = () => {
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    return (
        <header className="bg-black text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold">
                        ST GROUP
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={handleDropdownClick}
                                className="flex items-center space-x-1 text-base hover:text-blue-400 transition-colors px-4 py-2"
                            >
                                <span>Vientiane</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Desktop Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <Link
                                        to="/stwa"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        ST Hotel Wattay Airport
                                    </Link>
                                    <hr className="my-2 border-gray-200" />
                                    <Link
                                        to="/stv"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        ST Vegas
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <Link
                                to="/"
                                className="flex items-center space-x-1 text-base hover:text-blue-400 transition-colors px-4 py-2"
                            >
                                <span>Pakse</span>
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={toggleMobileMenu}
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMobileMenuOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="py-4 space-y-2 border-t border-gray-700 mt-4">
                        {/* Mobile Vientiane Dropdown */}
                        <div>
                            <button
                                onClick={toggleMobileDropdown}
                                className="flex items-center justify-between w-full px-4 py-2 text-white hover:bg-gray-800 transition duration-300 rounded"
                            >
                                <span>Vientiane</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Mobile Dropdown Items */}
                            <div className={`transition-all duration-300 ease-in-out ${
                                isMobileDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                            }`}>
                                <Link
                                    to="/stwa"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsMobileDropdownOpen(false);
                                    }}
                                    className="block px-8 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300 rounded text-sm"
                                >
                                    ST Hotel Wattay Airport
                                </Link>
                                <Link
                                    to="/stv"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsMobileDropdownOpen(false);
                                    }}
                                    className="block px-8 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition duration-300 rounded text-sm"
                                >
                                    ST Vegas
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Pakse Link */}
                        <Link 
                            to="/" 
                            className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-300 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pakse
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;