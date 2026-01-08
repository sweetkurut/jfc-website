import { Dumbbell, Instagram, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-red-600 p-2 rounded-lg">
                                <Dumbbell className="w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold">JFC GYM</span>
                        </div>
                        <p className="text-gray-400">
                            Территория силы и результата. Достигай целей вместе с профессионалами.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Контакты</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>г. Бишкек, ул. Спортивная 15</p>
                            <p>+996 555 123 456</p>
                            <p>Пн-Пт: 06:00 - 23:00</p>
                            <p>Сб-Вс: 08:00 - 22:00</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="tel:+996555123456"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors"
                            >
                                <Phone className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 JFC GYM. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
