import { ArrowRight, Clock, User } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const artikel = {
    de: [
        { slug: 'dsgvo-fehler', kategorie: 'DSGVO & Recht', kColor: 'bg-red-50 text-red-600 border-red-100', titel: 'Die 7 größten DSGVO-Fehler, die Gründern teuer werden', desc: 'Cookie-Banner falsch eingebunden, Server in den USA, fehlendes Impressum – diese Fehler kosten bares Geld.', lesezeit: '7 Min.', date: '24. Feb. 2025', tag: 'Beliebt', tagC: 'bg-red-500', grad: 'from-red-600 to-orange-500', letter: '7' },
        { slug: 'wix-vs-agentur', kategorie: 'Strategie', kColor: 'bg-blue-50 text-blue-600 border-blue-100', titel: 'Wix vs. professionelle Agentur: Wann lohnt sich was?', desc: 'Wir rechnen ehrlich durch, wann der Agentur-ROI die Kosten übersteigt.', lesezeit: '9 Min.', date: '18. Jan. 2025', tag: 'Neu', tagC: 'bg-blue-500', grad: 'from-blue-600 to-navy-700', letter: 'W' },
        { slug: 'mehr-leads', kategorie: 'Conversion', kColor: 'bg-green-50 text-green-600 border-green-100', titel: 'Mehr Leads in 30 Tagen: 8 Hebel, die wirklich funktionieren', desc: 'Diese 8 verkaufspsychologischen Elemente steigern deine Conversion-Rate messbar.', lesezeit: '11 Min.', date: '5. Jan. 2025', tag: 'Praxis', tagC: 'bg-green-500', grad: 'from-green-600 to-teal-600', letter: '8' },
        { slug: 'vendor-lockin', kategorie: 'CMS & Technik', kColor: 'bg-purple-50 text-purple-600 border-purple-100', titel: 'Vendor Lock-in vermeiden: Wie du deine Website-Freiheit behältst', desc: 'So erkennst du versteckte Abhängigkeiten vor der Unterschrift.', lesezeit: '8 Min.', date: '12. Dez. 2024', tag: 'Wichtig', tagC: 'bg-purple-500', grad: 'from-purple-600 to-pink-600', letter: 'V' },
        { slug: 'core-web-vitals', kategorie: 'Performance & SEO', kColor: 'bg-amber-50 text-amber-600 border-amber-100', titel: 'Core Web Vitals: Warum Geschwindigkeit über Leads entscheidet', desc: 'Wir erklären, was Core Web Vitals sind und wie du sie verstehst.', lesezeit: '6 Min.', date: '29. Nov. 2024', tag: 'SEO', tagC: 'bg-amber-500', grad: 'from-amber-500 to-orange-500', letter: 'C' },
        { slug: 'checkliste', kategorie: 'Leitfäden', kColor: 'bg-teal-50 text-teal-600 border-teal-100', titel: 'Die ultimative Checkliste: Was eine Start-up-Website braucht', desc: '22 Punkte, die unsere besten Kundenprojekte gemeinsam haben.', lesezeit: '5 Min.', date: '15. Nov. 2024', tag: 'Gratis PDF', tagC: 'bg-teal-500', grad: 'from-teal-500 to-blue-600', letter: '✓' },
    ],
    en: [
        { slug: 'gdpr-mistakes', kategorie: 'GDPR & Legal', kColor: 'bg-red-50 text-red-600 border-red-100', titel: 'The 7 biggest GDPR mistakes that cost founders dearly', desc: 'Wrong cookie banners, US servers, missing legal notice – these mistakes cost real money.', lesezeit: '7 min.', date: 'Feb 24, 2025', tag: 'Popular', tagC: 'bg-red-500', grad: 'from-red-600 to-orange-500', letter: '7' },
        { slug: 'wix-vs-agency', kategorie: 'Strategy', kColor: 'bg-blue-50 text-blue-600 border-blue-100', titel: 'Wix vs. professional agency: when does each make sense?', desc: 'We honestly calculate when the agency ROI exceeds the cost.', lesezeit: '9 min.', date: 'Jan 18, 2025', tag: 'New', tagC: 'bg-blue-500', grad: 'from-blue-600 to-navy-700', letter: 'W' },
        { slug: 'more-leads', kategorie: 'Conversion', kColor: 'bg-green-50 text-green-600 border-green-100', titel: 'More leads in 30 days: 8 levers that actually work', desc: 'These 8 sales psychology elements measurably increase your conversion rate.', lesezeit: '11 min.', date: 'Jan 5, 2025', tag: 'Practical', tagC: 'bg-green-500', grad: 'from-green-600 to-teal-600', letter: '8' },
        { slug: 'avoid-lockin', kategorie: 'CMS & Tech', kColor: 'bg-purple-50 text-purple-600 border-purple-100', titel: 'Avoid vendor lock-in: how to keep your website freedom', desc: 'Spot hidden dependencies before signing.', lesezeit: '8 min.', date: 'Dec 12, 2024', tag: 'Important', tagC: 'bg-purple-500', grad: 'from-purple-600 to-pink-600', letter: 'V' },
        { slug: 'core-web-vitals', kategorie: 'Performance & SEO', kColor: 'bg-amber-50 text-amber-600 border-amber-100', titel: 'Core Web Vitals: why site speed determines your leads', desc: 'We explain what Core Web Vitals are and how to understand them.', lesezeit: '6 min.', date: 'Nov 29, 2024', tag: 'SEO', tagC: 'bg-amber-500', grad: 'from-amber-500 to-orange-500', letter: 'C' },
        { slug: 'checklist', kategorie: 'Guides', kColor: 'bg-teal-50 text-teal-600 border-teal-100', titel: 'The ultimate checklist: what a start-up website needs', desc: '22 things our best client projects have in common.', lesezeit: '5 min.', date: 'Nov 15, 2024', tag: 'Free PDF', tagC: 'bg-teal-500', grad: 'from-teal-500 to-blue-600', letter: '✓' },
    ],
}

export default function Blog() {
    const { lang } = useLang()
    const tr = t[lang].blog
    const arts = artikel[lang]

    return (
        <section id="blog" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                    <div>
                        <p className="section-label">{tr.label}</p>
                        <h2 className="section-title">{tr.h2}</h2>
                        <p className="section-subtitle mt-2 max-w-xl">{tr.sub}</p>
                    </div>
                    <a href="#blog" id="blog-all-articles" className="flex-shrink-0 inline-flex items-center gap-2 text-navy-600 font-semibold text-sm hover:text-blue-500 transition-colors">
                        {tr.allArticles} <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Featured */}
                    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 lg:row-span-2">
                        <div className={`bg-gradient-to-br ${arts[0].grad} p-10 flex items-center justify-center h-52`}>
                            <span className="text-white text-7xl font-bold font-serif opacity-30">{arts[0].letter}</span>
                        </div>
                        <div className="p-7">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${arts[0].kColor}`}>{arts[0].kategorie}</span>
                            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 leading-snug font-serif group-hover:text-navy-600 transition-colors">{arts[0].titel}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">{arts[0].desc}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                    <span className="flex items-center gap-1"><Clock size={12} /> {arts[0].lesezeit}</span>
                                </div>
                                <a href={`#blog-${arts[0].slug}`} className="text-navy-600 hover:text-blue-500 transition-colors"><ArrowRight size={18} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Small cards */}
                    <div className="flex flex-col gap-6">
                        {arts.slice(1, 3).map((art, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5 flex">
                                <div className={`bg-gradient-to-br ${art.grad} w-20 flex-shrink-0 flex items-center justify-center`}>
                                    <span className="text-white text-3xl font-bold font-serif opacity-40">{art.letter}</span>
                                </div>
                                <div className="p-5 flex-1">
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${art.kColor}`}>{art.kategorie}</span>
                                    <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1 leading-snug group-hover:text-navy-600 transition-colors line-clamp-2">{art.titel}</h3>
                                    <div className="flex items-center gap-3 text-xs text-gray-400">
                                        <span className="flex items-center gap-1"><Clock size={10} /> {art.lesezeit}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {arts.slice(3).map((art, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                            <div className={`bg-gradient-to-br ${art.grad} h-28 flex items-center justify-center relative`}>
                                <span className="text-white text-5xl font-bold font-serif opacity-30">{art.letter}</span>
                                <span className={`absolute top-3 right-3 text-xs text-white font-bold px-2 py-0.5 rounded-full ${art.tagC}`}>{art.tag}</span>
                            </div>
                            <div className="p-5">
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${art.kColor}`}>{art.kategorie}</span>
                                <h3 className="text-sm font-bold text-gray-900 mt-3 mb-2 leading-snug group-hover:text-navy-600 line-clamp-2">{art.titel}</h3>
                                <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{art.desc}</p>
                                <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                                    <div className="flex items-center gap-1 text-xs text-gray-400"><Clock size={10} /> {art.lesezeit}</div>
                                    <a href={`#blog-${art.slug}`} id={`blog-${art.slug}`} className="text-xs font-semibold text-navy-600 hover:text-blue-500 flex items-center gap-1 transition-colors">
                                        {tr.read} <ArrowRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="mt-14 bg-navy-600 rounded-3xl p-8 md:p-12 text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">{tr.newsletterTitle}</h3>
                    <p className="text-navy-200 mb-7 max-w-md mx-auto text-sm">{tr.newsletterSub}</p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="email" id="newsletter-email" name="newsletter-email" placeholder={tr.newsletterPlaceholder} required aria-label="Newsletter email" className="flex-1 px-4 py-3 rounded-xl text-sm text-gray-900 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <button id="newsletter-submit" type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-colors flex-shrink-0">{tr.newsletterBtn}</button>
                    </form>
                    <p className="text-navy-400 text-xs mt-3">{tr.newsletterNote}</p>
                </div>
            </div>
        </section>
    )
}
