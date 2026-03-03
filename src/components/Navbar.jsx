import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Globe } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function Navbar() {
    const { lang, toggle } = useLang()
    const tr = t[lang].nav
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-navy-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">W</span>
                        </div>
                        <span className="font-serif font-bold text-navy-600 text-xl">
                            WebCraft<span className="text-blue-500">Studio</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {tr.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-gray-600 hover:text-navy-600 font-medium text-sm rounded-lg hover:bg-navy-50 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Lang Toggle + CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Language Switcher */}
                        <button
                            id="lang-toggle"
                            onClick={toggle}
                            title={lang === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
                            className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-gray-600 hover:text-navy-600 hover:bg-navy-50 rounded-lg transition-all duration-200 border border-gray-200 hover:border-navy-200"
                        >
                            <Globe size={14} />
                            <span>{lang === 'de' ? 'EN' : 'DE'}</span>
                        </button>

                        <a
                            href="#kontakt"
                            className="text-sm font-semibold text-navy-600 hover:text-blue-500 transition-colors"
                        >
                            {tr.ctaSub}
                        </a>
                        <a
                            href="#kontakt"
                            id="nav-cta"
                            className="btn-primary text-sm px-5 py-2.5"
                        >
                            {tr.cta} <ChevronRight size={16} />
                        </a>
                    </div>

                    {/* Mobile: Lang Toggle + Hamburger */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            id="lang-toggle-mobile"
                            onClick={toggle}
                            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-lg hover:border-navy-300 hover:text-navy-600 transition-all"
                        >
                            <Globe size={12} />
                            {lang === 'de' ? 'EN' : 'DE'}
                        </button>
                        <button
                            id="mobile-menu-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                            aria-label="Menü öffnen"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {tr.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 text-gray-700 hover:text-navy-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2 border-t border-gray-100 mt-2">
                            <a
                                href="#kontakt"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary w-full justify-center"
                            >
                                {tr.mobileCtaBtn}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
