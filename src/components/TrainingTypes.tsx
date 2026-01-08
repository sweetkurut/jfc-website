export default function TrainingTypes() {
    const types = [
        {
            name: "CrossFit",
            description: "Высокоинтенсивные функциональные тренировки",
            image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Boxing / MMA",
            description: "Единоборства и боевые искусства",
            image: "https://images.pexels.com/photos/4720269/pexels-photo-4720269.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Functional Training",
            description: "Развитие функциональной силы",
            image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Power Training",
            description: "Силовые тренировки для роста массы",
            image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Stretching",
            description: "Развитие гибкости и мобильности",
            image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Cardio",
            description: "Тренировки на выносливость",
            image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black mb-4">
                        ТИПЫ <span className="text-red-600">ЗАНЯТИЙ</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {types.map((type) => (
                        <div
                            key={type.name}
                            className="group relative overflow-hidden rounded-xl h-80 cursor-pointer"
                        >
                            <img
                                src={type.image}
                                alt={type.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-black mb-2 text-red-600">{type.name}</h3>
                                <p className="text-gray-300">{type.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
