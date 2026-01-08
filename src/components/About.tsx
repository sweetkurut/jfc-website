import { Award, Users, Wrench, Home } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Wrench,
      title: 'Современное оборудование',
      description: 'Новейшие тренажёры от ведущих производителей'
    },
    {
      icon: Users,
      title: 'Профессиональные тренеры',
      description: 'Сертифицированные специалисты с многолетним опытом'
    },
    {
      icon: Award,
      title: 'Индивидуальный подход',
      description: 'Программы, разработанные под ваши цели'
    },
    {
      icon: Home,
      title: 'Комфортные залы',
      description: 'Чистые раздевалки и современная инфраструктура'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            О <span className="text-red-600">КЛУБЕ</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-red-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
