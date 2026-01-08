import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TrainingTypes from "./components/TrainingTypes";
import Schedule from "./components/Schedule";
import Trainers from "./components/Trainers";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

function App() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const scrollToSchedule = () => {
        const element = document.getElementById("schedule");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-black">
            <Header onBookingClick={() => setIsBookingModalOpen(true)} />
            <Hero onBookingClick={() => setIsBookingModalOpen(true)} onScheduleClick={scrollToSchedule} />
            <About />
            <Services />
            <TrainingTypes />
            <Schedule onBookingClick={() => setIsBookingModalOpen(true)} />
            <Trainers onBookingClick={() => setIsBookingModalOpen(true)} />
            <Programs />
            <Testimonials />
            <Contact />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}

export default App;
