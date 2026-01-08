import { Clock } from 'lucide-react';
import { useState } from 'react';

interface ScheduleProps {
  onBookingClick: () => void;
}

export default function Schedule({ onBookingClick }: ScheduleProps) {
  const [selectedDay, setSelectedDay] = useState('Понедельник');

  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const schedule = {
    'Понедельник': [
      { time: '07:00', title: 'CrossFit', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '09:00', title: 'Power Training', trainer: 'Дмитрий Иванов', type: 'Групповое' },
      { time: '12:00', title: 'Boxing', trainer: 'Марат Асанов', type: 'Групповое' },
      { time: '18:00', title: 'Functional Training', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '19:30', title: 'Stretching', trainer: 'Анна Смирнова', type: 'Групповое' }
    ],
    'Вторник': [
      { time: '07:00', title: 'Cardio', trainer: 'Елена Волкова', type: 'Групповое' },
      { time: '10:00', title: 'MMA', trainer: 'Марат Асанов', type: 'Групповое' },
      { time: '15:00', title: 'CrossFit', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '18:00', title: 'Power Training', trainer: 'Дмитрий Иванов', type: 'Групповое' }
    ],
    'Среда': [
      { time: '07:00', title: 'Functional Training', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '09:00', title: 'Stretching', trainer: 'Анна Смирнова', type: 'Групповое' },
      { time: '12:00', title: 'Boxing', trainer: 'Марат Асанов', type: 'Групповое' },
      { time: '18:00', title: 'CrossFit', trainer: 'Алексей Петров', type: 'Групповое' }
    ],
    'Четверг': [
      { time: '07:00', title: 'Power Training', trainer: 'Дмитрий Иванов', type: 'Групповое' },
      { time: '10:00', title: 'Cardio', trainer: 'Елена Волкова', type: 'Групповое' },
      { time: '18:00', title: 'MMA', trainer: 'Марат Асанов', type: 'Групповое' },
      { time: '19:30', title: 'Stretching', trainer: 'Анна Смирнова', type: 'Групповое' }
    ],
    'Пятница': [
      { time: '07:00', title: 'CrossFit', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '09:00', title: 'Functional Training', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '12:00', title: 'Boxing', trainer: 'Марат Асанов', type: 'Групповое' },
      { time: '18:00', title: 'Power Training', trainer: 'Дмитрий Иванов', type: 'Групповое' }
    ],
    'Суббота': [
      { time: '09:00', title: 'CrossFit', trainer: 'Алексей Петров', type: 'Групповое' },
      { time: '11:00', title: 'MMA', trainer: 'Марат Асанов', type: 'Групповое' },
      { time: '14:00', title: 'Stretching', trainer: 'Анна Смирнова', type: 'Групповое' }
    ],
    'Воскресенье': [
      { time: '10:00', title: 'Cardio', trainer: 'Елена Волкова', type: 'Групповое' },
      { time: '12:00', title: 'Functional Training', trainer: 'Алексей Петров', type: 'Групповое' }
    ]
  };

  return (
    <section id="schedule" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            РАСПИСАНИЕ <span className="text-red-600">ЗАНЯТИЙ</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {schedule[selectedDay as keyof typeof schedule].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-600 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xl min-w-[80px]">
                  <Clock className="w-5 h-5" />
                  {item.time}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.trainer} • {item.type}</p>
                </div>
              </div>
              <button
                onClick={onBookingClick}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
