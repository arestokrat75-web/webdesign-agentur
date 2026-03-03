import { ArrowRight, Shield, Clock, Star, CheckCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function Hero() {
    const { lang } = useLang()
    const tr = t[lang].hero

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #EFF3F8 50%, #FFFFFF 100%)' }}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1E3A5F 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1E3A5F 1px, transparent 1px), linear-gradient(90deg, #1E3A5F 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-navy-50 border border-navy-100 text-navy-600 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        {tr.badge}
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100">
                        {tr.h1a}{' '}
                        <span className="text-gradient">{tr.h1b}</span>
                    </h1>

                    {/* Sub */}
                    <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl animate-fade-in-up delay-200">
                        {tr.sub}{' '}
                        <strong className="text-navy-600">{tr.subBold}</strong>{' '}
                        {tr.subEnd}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
                        <a href="#kontakt" id="hero-cta-primary" className="btn-primary text-base">
                            {tr.ctaPrimary} <ArrowRight size={18} />
                        </a>
                        <a href="#referenzen" id="hero-cta-secondary" className="btn-secondary text-base">
                            {tr.ctaSecondary}
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 animate-fade-in-up delay-400">
                        {tr.stats.map((s) => (
                            <div key={s.label} className="text-center sm:text-left">
                                <div className="text-2xl sm:text-3xl font-bold text-navy-600 font-serif">{s.value}</div>
                                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
                        {[Shield, Clock, Star, CheckCircle].map((Icon, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <Icon size={16} className="text-blue-500 flex-shrink-0" />
                                <span className="font-medium">{tr.badges[i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Card */}
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-80">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-fade-in-up delay-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle size={20} className="text-green-600" />
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 text-sm">{tr.cardTitle}</div>
                                <div className="text-gray-400 text-xs">{tr.cardSub}</div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                            {tr.cardDesc} <strong>{tr.cardDays}</strong>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">5.0 / 5.0</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="text-xs text-gray-400 mb-2">{tr.cardLabel}</div>
                            <div className="text-2xl font-bold text-navy-600 font-serif">+340%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
