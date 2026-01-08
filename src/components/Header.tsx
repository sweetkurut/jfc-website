import { useState, useEffect } from "react";
import { Dumbbell, Menu, X } from "lucide-react";

interface HeaderProps {
    onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <div className="bg-red-600 p-2 rounded-lg">
                            <Dumbbell className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white text-xl font-bold">JFC GYM</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection("schedule")}
                            className="text-white hover:text-red-600 transition-colors font-semibold"
                        >
                            Расписание
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-white hover:text-red-600 transition-colors font-semibold"
                        >
                            Контакты
                        </button>
                        <button
                            onClick={onBookingClick}
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300"
                        >
                            Записаться
                        </button>
                    </nav>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
                    <nav className="flex flex-col p-4 space-y-4">
                        <button
                            onClick={() => scrollToSection("schedule")}
                            className="text-white hover:text-red-600 transition-colors font-semibold text-left"
                        >
                            Расписание
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-white hover:text-red-600 transition-colors font-semibold text-left"
                        >
                            Контакты
                        </button>
                        <button
                            onClick={() => {
                                onBookingClick();
                                setIsMobileMenuOpen(false);
                            }}
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300"
                        >
                            Записаться
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
