import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const faqData = {
    de: [
        {
            category: 'Preise & Budget',
            items: [
                { q: 'Was kostet eine professionelle Website bei euch?', a: 'Unsere Pakete starten ab 2.490 € (Starter) für bis zu 5 Seiten. Das Growth-Paket liegt bei 4.990 €. Alle Preise sind Festpreise – keine versteckten Kosten.' },
                { q: 'Gibt es eine Möglichkeit, den Betrag aufzuteilen?', a: '50% bei Auftragserteilung, 50% nach Abnahme und Go-Live. So wird dein Cashflow nicht auf einmal belastet.' },
                { q: 'Was ist NICHT im Preis enthalten?', a: 'Domain (ca. 1–2 €/Monat) und Hosting (ca. 8–15 €/Monat) sind nicht enthalten. Premium-Stockfotos können extra kosten – werden aber vorher kommuniziert.' },
                { q: 'Gibt es monatliche Folgekosten?', a: 'Nein – kein Pflicht-Retainer. Optionaler Wartungsvertrag ab 49 €/Monat – aber nur wenn du das möchtest.' },
            ],
        },
        {
            category: 'DSGVO & Rechtliches',
            items: [
                { q: 'Ist meine Website wirklich 100 % DSGVO-konform?', a: 'Ja. DSGVO-konformes Cookie-Banner, Impressum nach §5 TMG, Datenschutzerklärung, sichere Formulare. Du bekommst ein schriftliches DSGVO-Protokoll.' },
                { q: 'Schützt ihr mich vor Abmahnungen?', a: 'Wir setzen alle technischen DSGVO-Anforderungen korrekt um. Die häufigsten Abmahn-Gründe eliminieren wir systematisch.' },
                { q: 'Welches CMS nutzt ihr – und bin ich dadurch gebunden?', a: 'Wir setzen auf WordPress oder React – offene Standards. Kein Lock-in. Du kannst jederzeit wechseln.' },
            ],
        },
        {
            category: 'Prozess & Timing',
            items: [
                { q: 'Wie lange dauert es bis zur fertigen Website?', a: 'Typischerweise 4–5 Wochen vom Kick-off bis Go-Live. Starter-Projekte oft schon in 3 Wochen.' },
                { q: 'Was brauche ich, um zu starten?', a: 'Fast nichts: ein kurzes Gespräch über dein Geschäftsmodell reicht. Wir helfen beim Briefing, den Texten und der Struktur.' },
                { q: 'Kann ich nach Go-Live selbst Änderungen vornehmen?', a: 'Ja – das ist unser Versprechen. Wir schulen dich bei Übergabe. Texte, Bilder, neue Seiten – du machst das selbst.' },
            ],
        },
        {
            category: 'Qualität & Ergebnisse',
            items: [
                { q: 'Warum nicht einfach Wix nutzen?', a: 'Für Hobbyprojekte reicht Wix. Für ein Start-up, das Investoren überzeugen oder Kunden gewinnen will, reicht es meist nicht. Unsere Websites konvertieren messbar besser.' },
                { q: 'Messt ihr auch den Erfolg der Website?', a: 'Ja. Im Growth-Paket richten wir Conversion-Tracking ein – Google Analytics 4 oder Matomo auf deutschen Servern.' },
            ],
        },
    ],
    en: [
        {
            category: 'Pricing & Budget',
            items: [
                { q: 'How much does a professional website cost with you?', a: 'Our packages start at €2,490 (Starter) for up to 5 pages. The Growth package is €4,990. All prices are fixed – no hidden costs.' },
                { q: 'Is there a way to split the payment?', a: '50% on contract signing, 50% after acceptance and go-live. This way your cashflow isn\'t hit all at once.' },
                { q: 'What is NOT included in the price?', a: 'Domain (approx. €1–2/month) and hosting (approx. €8–15/month) are not included. Premium stock photos may cost extra – always communicated upfront.' },
                { q: 'Are there monthly ongoing costs?', a: 'No – no mandatory retainer. Optional maintenance contract from €49/month – but only if you want it.' },
            ],
        },
        {
            category: 'GDPR & Legal',
            items: [
                { q: 'Is my website really 100% GDPR compliant?', a: 'Yes. GDPR-compliant cookie banner, legal notice, privacy policy, secure forms. You receive a written GDPR protocol at handover.' },
                { q: 'Do you protect me from legal warnings?', a: 'We implement all technical GDPR requirements correctly. We systematically eliminate the most common causes of legal warnings.' },
                { q: 'Which CMS do you use – and will I be locked in?', a: 'We use WordPress or React – open standards. No lock-in. You can switch at any time.' },
            ],
        },
        {
            category: 'Process & Timing',
            items: [
                { q: 'How long does it take to get a finished website?', a: 'Typically 4–5 weeks from kick-off to go-live. Starter projects often done in 3 weeks.' },
                { q: 'What do I need to get started?', a: 'Almost nothing: a short conversation about your business model. We help with the briefing, copy and structure.' },
                { q: 'Can I make changes myself after go-live?', a: 'Yes – that\'s our promise. We train you at handover. Texts, images, new pages – you do it yourself.' },
            ],
        },
        {
            category: 'Quality & Results',
            items: [
                { q: 'Why not just use Wix?', a: 'Wix is fine for hobby projects. For a start-up convincing investors or winning customers, it usually falls short. Our websites convert measurably better.' },
                { q: 'Do you also measure the success of the website?', a: 'Yes. With the Growth package we set up conversion tracking – Google Analytics 4 or Matomo on German servers.' },
            ],
        },
    ],
}

export default function FAQ() {
    const { lang } = useLang()
    const tr = t[lang].faq
    const data = faqData[lang]
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (key) => setOpenIndex(openIndex === key ? null : key)

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="space-y-10">
                    {data.map((cat, ci) => (
                        <div key={ci}>
                            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4 pl-1">{cat.category}</h3>
                            <div className="space-y-3">
                                {cat.items.map((item, ii) => {
                                    const key = `${ci}-${ii}`
                                    const isOpen = openIndex === key
                                    return (
                                        <div key={ii} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-navy-200 shadow-sm bg-navy-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                                            <button id={`faq-${key}`} onClick={() => toggle(key)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
                                                <span className={`font-semibold text-sm sm:text-base leading-snug ${isOpen ? 'text-navy-600' : 'text-gray-800'}`}>{item.q}</span>
                                                <ChevronDown size={20} className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-navy-500' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-5">
                                                    <p className="text-gray-600 text-sm leading-relaxed border-t border-navy-100 pt-4">{item.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 text-center bg-gray-50 rounded-3xl p-8 border border-gray-100">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                            <MessageCircle size={22} className="text-navy-600" />
                        </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 font-serif">{tr.notFound}</h3>
                    <p className="text-gray-500 text-sm mb-5">{tr.notFoundSub}</p>
                    <a href="#kontakt" id="faq-cta" className="btn-primary">{tr.ctaBtn}</a>
                </div>
            </div>
        </section>
    )
}
