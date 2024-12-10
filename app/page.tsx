import HomeSection from '@/components/HomeSection';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Program from '@/components/Program';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <HomeSection />
            <AboutUs />
            <Program />
            <ContactUs />
            <Footer />
        </>
    );
}
