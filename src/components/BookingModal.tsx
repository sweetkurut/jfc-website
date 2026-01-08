import { X } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: '', message: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-800 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-black text-white mb-2">
          Записаться на <span className="text-red-600">тренировку</span>
        </h2>
        <p className="text-gray-400 mb-6">Заполните форму, и мы свяжемся с вами</p>

        {submitted ? (
          <div className="bg-green-600/10 border border-green-600 rounded-lg p-6 text-center">
            <p className="text-green-600 font-bold text-xl">Заявка отправлена!</p>
            <p className="text-gray-400 mt-2">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2">Имя *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none text-white transition-colors"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Телефон *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none text-white transition-colors"
                placeholder="+996 XXX XXX XXX"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Выберите услугу *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none text-white transition-colors"
              >
                <option value="">Выберите услугу</option>
                <option value="crossfit">CrossFit</option>
                <option value="boxing">Boxing / MMA</option>
                <option value="functional">Functional Training</option>
                <option value="power">Power Training</option>
                <option value="stretching">Stretching</option>
                <option value="cardio">Cardio</option>
                <option value="personal">Персональная тренировка</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Сообщение</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none text-white transition-colors resize-none"
                placeholder="Дополнительная информация..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Отправить заявку
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
