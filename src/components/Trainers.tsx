import { Star } from 'lucide-react';

interface TrainersProps {
  onBookingClick: () => void;
}

export default function Trainers({ onBookingClick }: TrainersProps) {
  const trainers = [
    {
      name: 'Алексей Петров',
      specialization: 'CrossFit / Functional Training',
      experience: '10 лет опыта',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Марат Асанов',
      specialization: 'Boxing / MMA',
      experience: '12 лет опыта',
      image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      specialization: 'Power Training',
      experience: '8 лет опыта',
      image: 'https://images.pexels.com/photos/4720266/pexels-photo-4720266.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Анна Смирнова',
      specialization: 'Stretching / Женские программы',
      experience: '7 лет опыта',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      specialization: 'Cardio / Functional',
      experience: '6 лет опыта',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    },
    {
      name: 'Игорь Соколов',
      specialization: 'Силовые тренировки',
      experience: '9 лет опыта',
      image: 'https://images.pexels.com/photos/4720268/pexels-photo-4720268.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            НАШИ <span className="text-red-600">ТРЕНЕРЫ</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Профессиональная команда сертифицированных специалистов</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-600 transition-all duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{trainer.specialization}</p>
                <p className="text-gray-400 mb-4">{trainer.experience}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(trainer.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <button
                  onClick={onBookingClick}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  Записаться к тренеру
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
