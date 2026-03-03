import { AlertTriangle, MessageSquareX, DollarSign, Lock, Smartphone, TrendingDown } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const icons = [DollarSign, MessageSquareX, AlertTriangle, Lock, Smartphone, TrendingDown]
const colors = [
    { bg: 'bg-red-50 border-red-100', icon: 'text-red-500' },
    { bg: 'bg-orange-50 border-orange-100', icon: 'text-orange-500' },
    { bg: 'bg-yellow-50 border-yellow-100', icon: 'text-yellow-600' },
    { bg: 'bg-purple-50 border-purple-100', icon: 'text-purple-500' },
    { bg: 'bg-blue-50 border-blue-100', icon: 'text-blue-500' },
    { bg: 'bg-pink-50 border-pink-100', icon: 'text-pink-500' },
]

export default function PainPoints() {
    const { lang } = useLang()
    const tr = t[lang].pain

    return (
        <section id="probleme" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tr.items.map((point, i) => {
                        const Icon = icons[i]
                        const c = colors[i]
                        return (
                            <div key={i} className={`rounded-2xl border p-6 ${c.bg} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                                    <Icon size={20} className={c.icon} />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-base mb-2">{point.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{point.desc}</p>
                                <blockquote className="text-xs text-gray-500 italic border-l-2 border-gray-300 pl-3">{point.quote}</blockquote>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-16 text-center bg-navy-600 rounded-3xl p-10 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">{tr.ctaBottom}</h3>
                    <p className="text-navy-100 mb-8 max-w-xl mx-auto">{tr.ctaBottomSub}</p>
                    <a href="#kontakt" id="pain-cta" className="btn-white">{tr.ctaBtn}</a>
                </div>
            </div>
        </section>
    )
}
