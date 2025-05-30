import React, { useState, useRef, useEffect } from 'react';

const Stwa = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const dropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);
    const roomDropdownRef = useRef(null);

    // Handle scroll effect with direction and re-animation
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newScrolled = scrollTop > 50;
            
            // Detect scroll direction
            const direction = scrollTop > lastScrollY ? 'down' : 'up';
            
            // If scroll state changes, trigger re-animation
            if (newScrolled !== isScrolled) {
                setAnimationKey(prev => prev + 1);
            }
            
            setIsScrolled(newScrolled);
            setScrollDirection(direction);
            setLastScrollY(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled, lastScrollY]);

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

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/stwa/1.jpg',
        '/stwa/2.jpg',
        '/stwa/3.jpg',
        '/stwa/4.jpg',
        '/stwa/5.jpg',
        '/stwa/6.jpg',
        '/stwa/7.jpg',
        '/stwa/8.jpg',
        '/stwa/9.jpg',
        '/stwa/10.jpg',
        '/stwa/11.jpg',
        '/stwa/12.jpg',
        '/stwa/13.jpg',
        '/stwa/14.jpg',
        '/stwa/15.jpg',
        '/stwa/16.jpg',
        '/stwa/17.jpg',
        '/stwa/18.jpg',
        '/stwa/19.jpg',
        '/stwa/20.jpg',
        '/stwa/21.jpg',
        '/stwa/22.jpg',
        '/stwa/23.jpg',
        '/stwa/24.jpg',
    ]
    
    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    // Animation classes based on scroll state and direction
    const getHeaderAnimationClass = () => {
        const baseClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out`;
        const scrolledClass = isScrolled 
            ? 'bg-white/95 backdrop-blur-md text-black shadow-xl border-b border-gray-200' 
            : 'bg-transparent text-white';
        
        // Add bounce and scale effects based on scroll direction
        const animationClass = isScrolled 
            ? (scrollDirection === 'down' ? 'animate-bounce-in-down' : 'animate-slide-in-up')
            : (scrollDirection === 'up' ? 'animate-fade-in-up' : 'animate-fade-in-down');
            
        return `${baseClass} ${scrolledClass} ${animationClass}`;
    };

    const getLogoAnimationClass = () => {
        const baseClass = `flex items-center hover:opacity-80 transition-all duration-700 ease-out whitespace-nowrap`;
        const animationClass = isScrolled 
            ? 'animate-zoom-in transform scale-105' 
            : 'animate-pulse-subtle';
        return `${baseClass} ${animationClass}`;
    };

    const getNavItemAnimationClass = (delay = 0) => {
        const baseClass = `text-base transition-all duration-500 px-4 py-2 font-medium transform`;
        const hoverClass = isScrolled ? 'hover:text-blue-600 hover:scale-105' : 'hover:text-blue-400 hover:scale-105';
        const animationClass = `animate-slide-in-right`;
        const delayClass = `animation-delay-${delay}`;
        return `${baseClass} ${hoverClass} ${animationClass} ${delayClass}`;
    };

    return (
        <>
            <style jsx>{`
                @keyframes bounce-in-down {
                    0% { transform: translateY(-100%); opacity: 0; }
                    60% { transform: translateY(10px); opacity: 0.8; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes slide-in-up {
                    0% { transform: translateY(100%); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes fade-in-down {
                    0% { transform: translateY(-20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes zoom-in {
                    0% { transform: scale(0.8); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                
                @keyframes pulse-subtle {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
                
                @keyframes slide-in-right {
                    0% { transform: translateX(20px); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes glow-pulse {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
                }
                
                .animate-bounce-in-down {
                    animation: bounce-in-down 0.8s ease-out;
                }
                
                .animate-slide-in-up {
                    animation: slide-in-up 0.6s ease-out;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out;
                }
                
                .animate-fade-in-down {
                    animation: fade-in-down 0.5s ease-out;
                }
                
                .animate-zoom-in {
                    animation: zoom-in 0.6s ease-out;
                }
                
                .animate-pulse-subtle {
                    animation: pulse-subtle 3s ease-in-out infinite;
                }
                
                .animate-slide-in-right {
                    animation: slide-in-right 0.6s ease-out;
                }
                
                .animate-glow-pulse {
                    animation: glow-pulse 2s ease-in-out infinite;
                }
                
                .animation-delay-100 { animation-delay: 0.1s; }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-300 { animation-delay: 0.3s; }
                
                /* Force re-animation by using animation-name changes */
                .re-animate-${animationKey} {
                    animation-iteration-count: 1;
                }
            `}</style>

            <header key={animationKey} className={getHeaderAnimationClass()}>
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden z-60 relative transform transition-all duration-300 hover:scale-110 ${
                                isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-400'
                            }`}
                            type="button"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo/Title - Changes based on scroll */}
                        <a href="/" className={getLogoAnimationClass()}>
                            {isScrolled ? (
                                // Show logo when scrolled
                                <img
                                    src="/stwa/HotelLogo.png"
                                    alt="ST Hotel Wattay Airport Logo"
                                    className="h-12 w-auto transition-all duration-700 ease-out transform hover:scale-110"
                                />
                            ) : (
                                // Show text when not scrolled
                                <span className="text-xl md:text-2xl font-bold transition-all duration-700 ease-out bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    ST Hotel Wattay Airport
                                </span>
                            )}
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                            {/* Home */}
                            <button
                                onClick={() => handleNavigation('home')}
                                className={getNavItemAnimationClass(100)}
                                type="button"
                            >
                                Home
                            </button>
                            {/* Room */}
                            <button
                                onClick={() => window.location.href = '/stwa/room'}
                                className={getNavItemAnimationClass(200)}
                                type="button"
                            >
                                Room
                            </button>
                            {/* Reserve Button */}
                            <button
                                onClick={() => alert('Reservation system opening...')}
                                className={`text-sm xl:text-base transition-all duration-500 px-4 xl:px-6 py-2 border-2 rounded-md font-medium whitespace-nowrap transform hover:scale-105 animate-glow-pulse ${
                                    isScrolled
                                        ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg'
                                        : 'border-white hover:bg-blue-400 hover:text-white hover:border-blue-400 hover:shadow-2xl'
                                } ${getNavItemAnimationClass(300)}`}
                                type="button"
                            >
                                RESERVE NOW
                            </button>
                        </nav>

                        {/* Mobile Reserve Button */}
                        <button
                            onClick={() => alert('Reservation system opening...')}
                            className={`lg:hidden text-sm px-3 py-2 border-2 rounded-md transition-all duration-500 font-medium whitespace-nowrap transform hover:scale-105 ${
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
                        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 py-4 animate-slide-in-up">
                            <div className="px-4 space-y-2">
                                <button
                                    onClick={() => handleNavigation('home')}
                                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 font-medium"
                                    type="button"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => window.location.href = '/stwa/room'}
                                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 font-medium"
                                    type="button"
                                >
                                    Room
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Demo Content */}
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section with Carousel */}
                <section className="relative h-screen overflow-hidden">
                    {/* Image Carousel */}
                    <div className="absolute inset-0">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1500 ease-in-out transform ${
                                    index === currentSlide 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-105'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Hotel slide ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

                    {/* Logo - Centered at Top - Only shows when NOT scrolled */}
                    <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-700 ease-out ${
                        isScrolled 
                            ? 'opacity-0 -translate-y-8 scale-90' 
                            : 'opacity-100 translate-y-0 scale-100 animate-fade-in-down'
                    }`}>
                        <div className="animate-pulse-subtle">
                            <img
                                src="/stwa/HotelLogo.png"
                                alt="ST Hotel Wattay Airport Logo"
                                className="h-44 w-auto mx-auto filter drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center text-white px-4 animate-fade-in-up">
                            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse-subtle">
                                WELCOME TO
                            </h1>
                            <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-100 animate-fade-in-up animation-delay-200">
                                ST Hotel Wattay Airport
                            </h2>
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-150 ${
                                    index === currentSlide
                                        ? 'bg-white scale-125 animate-glow-pulse'
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 hover:bg-opacity-70 rounded-full p-3 transition-all duration-500 z-20 hover:scale-110 hover:-translate-x-1"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 hover:bg-opacity-70 rounded-full p-3 transition-all duration-500 z-20 hover:scale-110 hover:translate-x-1"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </section>
            </div>

            {/* Demo Content */}
            <div className="pt-0">
                {/* Hero Section */}
                <div className="h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.4),transparent_50%)] animate-pulse-subtle"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)] animate-pulse-subtle animation-delay-200"></div>
                    </div>

                    <div className="text-center text-white z-10 px-4 animate-fade-in-up">
                        <div className="mb-6 animate-bounce-in-down">
                            <span className="text-6xl">✈️</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-zoom-in">
                            ST Vegas
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade-in-up animation-delay-300">Your Gateway to Comfort & Convenience</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stwa;