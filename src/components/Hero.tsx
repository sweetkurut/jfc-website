import { Dumbbell } from "lucide-react";

interface HeroProps {
    onBookingClick: () => void;
    onScheduleClick: () => void;
}

export default function Hero({ onBookingClick, onScheduleClick }: HeroProps) {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 animate-fade-in">
                    <div className="bg-red-600 p-3 rounded-lg">
                        <Dumbbell className="w-8 h-8" />
                    </div>
                    <span className="text-2xl font-bold tracking-wider">JFC GYM</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                    <span className="text-white">ТЕРРИТОРИЯ</span>
                    <br />
                    <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                        СИЛЫ И РЕЗУЛЬТАТА
                    </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
                    Современный спортивный комплекс с профессиональными тренерами и программами для любого
                    уровня подготовки
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onBookingClick}
                        className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
                    >
                        Записаться на тренировку
                    </button>
                    <button
                        onClick={onScheduleClick}
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg backdrop-blur-sm border-2 border-white/20 transition-all duration-300"
                    >
                        Посмотреть расписание
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl">
                    <div className="text-center">
                        <div className="text-4xl font-black text-red-600 mb-2">500+</div>
                        <div className="text-gray-400 uppercase text-sm tracking-wide">Клиентов</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-lime-500 mb-2">15+</div>
                        <div className="text-gray-400 uppercase text-sm tracking-wide">Тренеров</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-yellow-500 mb-2">8</div>
                        <div className="text-gray-400 uppercase text-sm tracking-wide">Лет опыта</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
