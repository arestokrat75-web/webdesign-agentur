import { LanguageProvider } from './context/LanguageContext'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import USPs from './components/USPs'
import Prozess from './components/Prozess'
import Referenzen from './components/Referenzen'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Preise from './components/Preise'
import FAQ from './components/FAQ'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-white font-sans">
                <TopBanner />
                <Navbar />
                <main>
                    <Hero />
                    <PainPoints />
                    <USPs />
                    <Prozess />
                    <Referenzen />
                    <Testimonials />
                    <Blog />
                    <Preise />
                    <FAQ />
                    <Kontakt />
                </main>
                <Footer />
                <CookieBanner />
            </div>
        </LanguageProvider>
    )
}

export default App
