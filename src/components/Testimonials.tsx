import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Максим Кузнецов",
            text: "За 6 месяцев тренировок достиг невероятных результатов! Профессиональные тренеры и отличная атмосфера.",
            rating: 5,
            image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Анастасия Петрова",
            text: "Лучший зал в городе! Всегда чисто, современное оборудование, и самое главное — результаты не заставили себя ждать.",
            rating: 5,
            image: "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Дмитрий Волков",
            text: "Занимаюсь боксом с Маратом уже год. Отличная подготовка, индивидуальный подход. Рекомендую всем!",
            rating: 5,
            image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Елена Соколова",
            text: "Пришла с нулевой подготовкой, сейчас уверенно тренируюсь и вижу прогресс. Спасибо команде JFC GYM!",
            rating: 5,
            image: "https://images.pexels.com/photos/3775137/pexels-photo-3775137.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Игорь Смирнов",
            text: "CrossFit тренировки просто огонь! Алексей — лучший тренер. Каждая тренировка — это вызов себе.",
            rating: 5,
            image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            name: "Ольга Иванова",
            text: "Отличный зал для женщин! Комфортная атмосфера, внимательные тренеры, результаты видны уже через месяц.",
            rating: 5,
            image: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black mb-4">
                        ОТЗЫВЫ <span className="text-red-600">КЛИЕНТОВ</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300"
                        >
                            <Quote className="w-10 h-10 text-red-600 mb-4" />
                            <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-500 text-yellow-500"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
