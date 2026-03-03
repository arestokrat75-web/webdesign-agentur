import { Star, Quote } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const authors = [
    { name: 'Maximilian Bauer', role: { de: 'Gründer & CEO', en: 'Founder & CEO' }, firma: 'TechStart GmbH', avatar: 'MB', avatarBg: 'from-blue-500 to-navy-600' },
    { name: 'Laura Schneider', role: { de: 'Co-Founderin', en: 'Co-Founder' }, firma: 'GreenBuild Solutions', avatar: 'LS', avatarBg: 'from-green-500 to-teal-600' },
    { name: 'Jonas Weber', role: { de: 'Gründer', en: 'Founder' }, firma: 'HealthNow UG', avatar: 'JW', avatarBg: 'from-purple-500 to-pink-600' },
]

export default function Testimonials() {
    const { lang } = useLang()
    const tr = t[lang].testi

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {tr.items.map((item, i) => {
                        const author = authors[i]
                        return (
                            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                                <div className="mb-5"><Quote size={32} className="text-navy-100 fill-navy-100" /></div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-amber-400 text-amber-400" />)}
                                </div>
                                <div className="inline-flex mb-4">
                                    <span className="text-xs font-bold bg-navy-50 text-navy-600 px-3 py-1 rounded-full border border-navy-100">✓ {item.highlight}</span>
                                </div>
                                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{item.text}"</blockquote>
                                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${author.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                        {author.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{author.name}</div>
                                        <div className="text-gray-400 text-xs">{author.role[lang]} · {author.firma}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-4 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 text-lg">5,0 / 5,0</span>
                            <span className="text-gray-500 text-sm ml-2">{tr.ratingLabel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
