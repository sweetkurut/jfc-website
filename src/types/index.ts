export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrainingType {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image?: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  trainer: string;
  type: string;
  day: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  ageGroup: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  service: string;
  message?: string;
}
