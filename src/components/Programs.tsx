import { Users, Trophy } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Детские секции',
      description: 'Общая физическая подготовка для детей 7-12 лет',
      ageGroup: '7-12 лет',
      icon: Users,
      color: 'lime'
    },
    {
      title: 'Подростковые программы',
      description: 'Силовые и функциональные тренировки для подростков',
      ageGroup: '13-17 лет',
      icon: Trophy,
      color: 'yellow'
    },
    {
      title: 'Взрослые группы',
      description: 'Программы для любого уровня подготовки',
      ageGroup: '18+ лет',
      icon: Users,
      color: 'red'
    },
    {
      title: 'Подготовка к соревнованиям',
      description: 'Интенсивные программы для спортсменов',
      ageGroup: 'Все возрасты',
      icon: Trophy,
      color: 'red'
    }
  ];

  const colorClasses = {
    red: 'bg-red-600/10 text-red-600',
    lime: 'bg-lime-500/10 text-lime-500',
    yellow: 'bg-yellow-500/10 text-yellow-500'
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            ПРОГРАММЫ И <span className="text-red-600">СЕКЦИИ</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            const colorClass = colorClasses[program.color as keyof typeof colorClasses];

            return (
              <div
                key={program.title}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClass}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <div className="inline-block px-4 py-2 bg-red-600/20 text-red-600 rounded-lg font-semibold">
                  {program.ageGroup}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
