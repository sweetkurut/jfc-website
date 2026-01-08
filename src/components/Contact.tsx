import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            КОНТАКТЫ
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Адрес</h4>
                  <p className="text-gray-400">г. Бишкек, ул. Спортивная 15</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Телефон</h4>
                  <p className="text-gray-400">+996 555 123 456</p>
                  <p className="text-gray-400">+996 777 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <Instagram className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Instagram</h4>
                  <a href="#" className="text-red-600 hover:text-red-500">@jfc_gym_kg</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Режим работы</h4>
                  <p className="text-gray-400">Пн-Пт: 06:00 - 23:00</p>
                  <p className="text-gray-400">Сб-Вс: 08:00 - 22:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.161416574795!2d74.61224831548213!3d42.87467817915149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebdf4e1d2f4c!2sBishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Обратная связь</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Телефон</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="+996 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Ваше сообщение..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {submitted ? 'Отправлено!' : 'Отправить сообщение'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
