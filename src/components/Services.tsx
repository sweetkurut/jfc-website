import { Dumbbell, User, Users, Zap, Heart, Baby } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Тренажёрный зал',
      description: 'Полностью оборудованный зал для силовых тренировок',
      color: 'red'
    },
    {
      icon: User,
      title: 'Персональные тренировки',
      description: 'Индивидуальные занятия с тренером',
      color: 'lime'
    },
    {
      icon: Users,
      title: 'Групповые занятия',
      description: 'Энергичные тренировки в команде',
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'Функциональный тренинг',
      description: 'Развитие силы, выносливости и координации',
      color: 'red'
    },
    {
      icon: Heart,
      title: 'Кардио-зона',
      description: 'Беговые дорожки, велотренажёры, эллипсоиды',
      color: 'lime'
    },
    {
      icon: Baby,
      title: 'Детские секции',
      description: 'Программы для детей и подростков',
      color: 'yellow'
    }
  ];

  const colorClasses = {
    red: 'bg-red-600/10 border-red-600 text-red-600',
    lime: 'bg-lime-500/10 border-lime-500 text-lime-500',
    yellow: 'bg-yellow-500/10 border-yellow-500 text-yellow-500'
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            НАШИ <span className="text-red-600">УСЛУГИ</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const colorClass = colorClasses[service.color as keyof typeof colorClasses];

            return (
              <div
                key={service.title}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 border-2 ${colorClass} transition-all duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
