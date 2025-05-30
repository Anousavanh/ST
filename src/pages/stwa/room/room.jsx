import React, { useState, useRef, useEffect } from 'react';

const Stwaroom = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);
    const roomDropdownRef = useRef(null);

    // Initialize AOS with re-animation
    useEffect(() => {
        // AOS initialization with re-animation support
        const initAOS = () => {
            if (typeof window !== 'undefined') {
                // Simple AOS-like functionality with re-animation
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // Add animation class when entering viewport
                            entry.target.classList.add('aos-animate');
                        } else {
                            // Remove animation class when leaving viewport (for re-animation)
                            entry.target.classList.remove('aos-animate');
                        }
                    });
                }, observerOptions);

                // Observe all elements with data-aos attribute
                const aosElements = document.querySelectorAll('[data-aos]');
                aosElements.forEach(el => {
                    observer.observe(el);
                });

                return () => {
                    aosElements.forEach(el => {
                        observer.unobserve(el);
                    });
                };
            }
        };

        // Delay initialization to ensure DOM is ready
        const timer = setTimeout(() => {
            initAOS();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

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

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <style jsx>{`
                /* AOS Animation Styles with Re-animation */
                [data-aos] {
                    opacity: 0;
                    transition-property: opacity, transform;
                    transition-duration: 1000ms;
                    transition-timing-function: ease-out-cubic;
                    will-change: opacity, transform;
                }
                
                [data-aos].aos-animate {
                    opacity: 1;
                    transform: none;
                }
                
                /* Ensure smooth re-animation */
                [data-aos]:not(.aos-animate) {
                    opacity: 0;
                }
                
                /* Fade Up */
                [data-aos="fade-up"] {
                    transform: translateY(60px);
                }
                
                /* Fade Down */
                [data-aos="fade-down"] {
                    transform: translateY(-60px);
                }
                
                /* Fade Left */
                [data-aos="fade-left"] {
                    transform: translateX(60px);
                }
                
                /* Fade Right */
                [data-aos="fade-right"] {
                    transform: translateX(-60px);
                }
                
                /* Zoom In */
                [data-aos="zoom-in"] {
                    transform: scale(0.8);
                }
                
                /* Zoom Out */
                [data-aos="zoom-out"] {
                    transform: scale(1.2);
                }
                
                /* Flip Up */
                [data-aos="flip-up"] {
                    transform: perspective(2500px) rotateX(-100deg);
                }

                /* Different delays */
                [data-aos][data-aos-delay="100"] {
                    transition-delay: 100ms;
                }
                [data-aos][data-aos-delay="200"] {
                    transition-delay: 200ms;
                }
                [data-aos][data-aos-delay="300"] {
                    transition-delay: 300ms;
                }
                [data-aos][data-aos-delay="400"] {
                    transition-delay: 400ms;
                }
                [data-aos][data-aos-delay="500"] {
                    transition-delay: 500ms;
                }

                /* Different durations */
                [data-aos][data-aos-duration="500"] {
                    transition-duration: 500ms;
                }
                [data-aos][data-aos-duration="1000"] {
                    transition-duration: 1000ms;
                }
                [data-aos][data-aos-duration="1500"] {
                    transition-duration: 1500ms;
                }

                /* Enhanced re-animation effects */
                [data-aos="fade-up"]:not(.aos-animate) {
                    transform: translateY(60px);
                    opacity: 0;
                }
                
                [data-aos="fade-down"]:not(.aos-animate) {
                    transform: translateY(-60px);
                    opacity: 0;
                }
                
                [data-aos="fade-left"]:not(.aos-animate) {
                    transform: translateX(60px);
                    opacity: 0;
                }
                
                [data-aos="fade-right"]:not(.aos-animate) {
                    transform: translateX(-60px);
                    opacity: 0;
                }
                
                [data-aos="zoom-in"]:not(.aos-animate) {
                    transform: scale(0.8);
                    opacity: 0;
                }
                
                [data-aos="flip-up"]:not(.aos-animate) {
                    transform: perspective(2500px) rotateX(-100deg);
                    opacity: 0;
                }
            `}</style>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
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

                        {/* Logo/Title - Changes based on scroll */}
                        <a
                            href="/"
                            className="flex items-center hover:opacity-80 transition-opacity whitespace-nowrap"
                        >
                            {isScrolled ? (
                                // Show logo when scrolled
                                <img
                                    src="/stwa/HotelLogo.png"
                                    alt="ST Hotel Wattay Airport Logo"
                                    className="h-12 w-auto transition-all duration-500 ease-in-out"
                                />
                            ) : (
                                // Show text when not scrolled
                                <span className="text-xl md:text-2xl font-bold transition-all duration-500 ease-in-out">
                                    ST Hotel Wattay Airport
                                </span>
                            )}
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                            {/* Home */}
                            <button
                                onClick={() => window.location.href = '/stwa/'}
                                className={`text-base transition-colors px-4 py-2 font-medium ${isScrolled
                                    ? 'hover:text-blue-600'
                                    : 'hover:text-blue-400'
                                    }`}
                                type="button"
                            >
                                Home
                            </button>
                            {/* Room */}
                            <button
                                onClick={() => window.location.href = '/stwa/room'}
                                className={`text-base transition-colors px-4 py-2 font-medium ${isScrolled
                                    ? 'hover:text-blue-600'
                                    : 'hover:text-blue-400'
                                    }`}
                                type="button"
                            >
                                Room
                            </button>
                            {/* Reserve Button */}
                            <button
                                onClick={() => alert('Reservation system opening...')}
                                className={`text-sm xl:text-base transition-all duration-300 px-4 xl:px-6 py-2 border-2 rounded-md font-medium whitespace-nowrap ${isScrolled
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
                            className={`lg:hidden text-sm px-3 py-2 border-2 rounded-md transition-all duration-300 font-medium whitespace-nowrap ${isScrolled
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
                                    onClick={() => window.location.href = '/stwa/'}
                                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                                    type="button"
                                >
                                    Home
                                </button>
                                {/* Room */}
                                <button
                                    onClick={() => window.location.href = '/stwa/room'}
                                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                                    type="button"
                                >
                                    Room
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section with Carousel */}
            <section className="relative min-h-96 py-20 overflow-hidden">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white px-4 mt-16">
                        <h1 
                            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            Rooms
                        </h1>
                        <div className="max-w-4xl mx-auto">
                            <p 
                                className="text-xl md:text-2xl mb-4 text-gray-200 leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                Harmonious blend of Lao contemporary and french colonial design and decor
                            </p>
                            <p 
                                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="1000"
                            >
                                Atmosphere reminiscent of a city resort, unique to its location within Vientiane's bustling commercial area
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Room Types Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Deluxe King */}
                        <div 
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/stwa/5.jpg"
                                alt="Deluxe King"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">Deluxe King</h3>
                                <p className="text-gray-600 mb-4">
                                    Contemporary comfort with traditional Lao touches. Perfect for business and leisure travelers.
                                </p>
                                <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* Deluxe Twin */}
                        <div 
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/stwa/14.jpg"
                                alt="Deluxe Twin"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">Deluxe Twin</h3>
                                <p className="text-gray-600 mb-4">
                                    Spacious suites featuring French colonial design elements and premium amenities.
                                </p>
                                <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>

                        {/* Suite */}
                        <div 
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/stwa/10.jpg"
                                alt="Suite"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">Suite</h3>
                                <p className="text-gray-600 mb-4">
                                    Generous space for families with connecting rooms and child-friendly amenities.
                                </p>
                                <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 
                            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            Heritage Experience
                        </h2>
                        <p 
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            Discover the unique blend of cultural heritage and modern comfort that defines our hotel experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏛️</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Colonial Design</h3>
                            <p className="text-gray-600">French colonial architecture with Lao cultural elements</p>
                        </div>

                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌸</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Cultural Heritage</h3>
                            <p className="text-gray-600">Authentic Lao hospitality and traditional experiences</p>
                        </div>

                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏙️</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Prime Location</h3>
                            <p className="text-gray-600">Heart of Vientiane's bustling commercial district</p>
                        </div>

                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Modern Luxury</h3>
                            <p className="text-gray-600">Contemporary amenities with timeless elegance</p>
                        </div>
                    </div>
                </div>
            </section>
             {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 
                            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            Heritage Experience
                        </h2>
                        <p 
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            Discover the unique blend of cultural heritage and modern comfort that defines our hotel experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏛️</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Colonial Design</h3>
                            <p className="text-gray-600">French colonial architecture with Lao cultural elements</p>
                        </div>

                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🌸</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Cultural Heritage</h3>
                            <p className="text-gray-600">Authentic Lao hospitality and traditional experiences</p>
                        </div>

                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏙️</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Prime Location</h3>
                            <p className="text-gray-600">Heart of Vientiane's bustling commercial district</p>
                        </div>

                        <div 
                            className="text-center"
                            data-aos="flip-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">Modern Luxury</h3>
                            <p className="text-gray-600">Contemporary amenities with timeless elegance</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stwaroom;