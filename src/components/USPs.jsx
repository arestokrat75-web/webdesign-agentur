import { Shield, Unlock, Zap, Eye, Heart, TrendingUp } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const icons = [Shield, Eye, Unlock, Zap, TrendingUp, Heart]

export default function USPs() {
    const { lang } = useLang()
    const tr = t[lang].usps

    return (
        <section id="leistungen" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tr.items.map((usp, i) => {
                        const Icon = icons[i]
                        return (
                            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-navy-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center group-hover:bg-navy-600 transition-colors duration-300">
                                        <Icon size={22} className="text-navy-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">{usp.highlight}</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 text-lg mb-3 leading-snug">{usp.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{usp.desc}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Comparison */}
                <div className="mt-16 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        <div className="p-8">
                            <h4 className="font-semibold text-gray-400 text-sm uppercase tracking-wide mb-5">{tr.othersTitle}</h4>
                            <ul className="space-y-3">
                                {tr.othersItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
                                        <span className="text-red-400 font-bold flex-shrink-0">✗</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-navy-600">
                            <h4 className="font-semibold text-navy-200 text-sm uppercase tracking-wide mb-5">{tr.ourTitle}</h4>
                            <ul className="space-y-3">
                                {tr.ourItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                                        <span className="text-green-400 font-bold flex-shrink-0">✓</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
