import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Stv = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);
    const roomDropdownRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
            if (roomDropdownRef.current && !roomDropdownRef.current.contains(event.target)) {
                setIsRoomDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigation = (section) => {
        console.log('Navigate to:', section);
        // Close all dropdowns
        setIsDropdownOpen(false);
        setIsServicesDropdownOpen(false);
        setIsRoomDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md text-black shadow-lg border-b border-gray-200'
                        : 'bg-transparent text-white'
                }`}
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden z-60 relative"
                            type="button"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo/Title */}
                        <Link
                            to="/"
                            className="text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
                        >
                            ST Vegas
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                            {/* Home */}
                            <button
                                onClick={() => handleNavigation('home')}
                                className={`text-base transition-colors px-4 py-2 font-medium ${
                                    isScrolled
                                        ? 'hover:text-blue-600'
                                        : 'hover:text-blue-400'
                                }`}
                                type="button"
                            >
                                Home
                            </button>
                            {/* Reserve Button */}
                            <button
                                onClick={() => alert('Reservation system opening...')}
                                className={`text-sm xl:text-base transition-all duration-300 px-4 xl:px-6 py-2 border-2 rounded-md font-medium whitespace-nowrap ${
                                    isScrolled
                                        ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                                        : 'border-white hover:bg-blue-400 hover:text-white hover:border-blue-400'
                                }`}
                                type="button"
                            >
                                RESERVE NOW
                            </button>
                        </nav>

                        {/* Mobile Reserve Button */}
                        <button
                            onClick={() => alert('Reservation system opening...')}
                            className={`lg:hidden text-sm px-3 py-2 border-2 rounded-md transition-all duration-300 font-medium whitespace-nowrap ${
                                isScrolled
                                    ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                                    : 'border-white hover:bg-blue-400 hover:text-white hover:border-blue-400'
                            }`}
                            type="button"
                        >
                            RESERVE
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 py-4 animate-in slide-in-from-top-2 duration-200">
                            <div className="px-4 space-y-2">
                                <button
                                    onClick={() => handleNavigation('home')}
                                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                                    type="button"
                                >
                                    Home
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Demo Content */}
            <div className="pt-0">
                {/* Hero Section */}
                <div className="h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]"></div>
                    </div>

                    <div className="text-center text-white z-10 px-4">
                        <div className="mb-6">
                            <span className="text-6xl">✈️</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            ST Vegas
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 mb-8">Your Gateway to Comfort & Convenience</p>
                    </div>
                </div>
            </div>
            {/* Demo Content */}
            <div className="pt-0">
                {/* Hero Section */}
                <div className="h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]"></div>
                    </div>

                    <div className="text-center text-white z-10 px-4">
                        <div className="mb-6">
                            <span className="text-6xl">✈️</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            ST Vegas
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 mb-8">Your Gateway to Comfort & Convenience</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stv;