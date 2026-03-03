import { Check, X, HelpCircle, Zap } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const pakete = {
    de: [
        { name: 'Starter', tagline: 'Für Gründer mit erstem Launch', preis: '2.490', highlight: false, cta: 'Starter wählen', ctaId: 'cta-starter', features: [{ text: 'Bis zu 5 Seiten', ok: true }, { text: 'Mobile-First & Core Web Vitals', ok: true }, { text: '100% DSGVO-konform', ok: true }, { text: 'Impressum & Datenschutz', ok: true }, { text: 'DSGVO-Kontaktformular', ok: true }, { text: '1x Revision-Runde', ok: true }, { text: 'CMS-Einrichtung (selbst pflegbar)', ok: true }, { text: 'SEO-Grundlagen', ok: true }, { text: 'Individuelle Animationen', ok: false }, { text: 'Conversion-Tracking Setup', ok: false }, { text: 'Blog-System', ok: false }] },
        { name: 'Growth', tagline: 'Für Start-ups mit Wachstumsambitionen', preis: '4.990', highlight: true, cta: 'Growth wählen', ctaId: 'cta-growth', features: [{ text: 'Bis zu 12 Seiten inkl. Blog', ok: true }, { text: 'Mobile-First & Core Web Vitals', ok: true }, { text: '100% DSGVO-konform', ok: true }, { text: 'Impressum & Datenschutz', ok: true }, { text: 'DSGVO-Kontaktformular', ok: true }, { text: 'Unbegrenzte Revision-Runden', ok: true }, { text: 'CMS + Schulung (2h)', ok: true }, { text: 'Advanced SEO + Schema', ok: true }, { text: 'Individuelle Animationen', ok: true }, { text: 'Conversion-Tracking Setup', ok: true }, { text: 'Blog-System', ok: true }] },
        { name: 'Custom', tagline: 'Für komplexe Anforderungen', preis: 'Auf Anfrage', highlight: false, cta: 'Jetzt anfragen', ctaId: 'cta-custom', features: [{ text: 'Unbegrenzte Seiten & Funktionen', ok: true }, { text: 'Mobile-First & Core Web Vitals', ok: true }, { text: '100% DSGVO-konform', ok: true }, { text: 'Impressum & Datenschutz', ok: true }, { text: 'DSGVO-Kontaktformular', ok: true }, { text: 'Unbegrenzte Revision-Runden', ok: true }, { text: 'CMS + Schulung (4h)', ok: true }, { text: 'Full-Stack SEO-Audit', ok: true }, { text: 'Individuelle Animationen', ok: true }, { text: 'API-Integrationen & Buchungstools', ok: true }, { text: 'Dedizierter Projektmanager', ok: true }] },
    ],
    en: [
        { name: 'Starter', tagline: 'For founders with their first launch', preis: '2,490', highlight: false, cta: 'Choose Starter', ctaId: 'cta-starter', features: [{ text: 'Up to 5 pages', ok: true }, { text: 'Mobile-first & Core Web Vitals', ok: true }, { text: '100% GDPR compliant', ok: true }, { text: 'Legal notice & privacy policy', ok: true }, { text: 'GDPR contact form', ok: true }, { text: '1 revision round', ok: true }, { text: 'CMS setup (self-manageable)', ok: true }, { text: 'SEO basics', ok: true }, { text: 'Custom animations', ok: false }, { text: 'Conversion tracking setup', ok: false }, { text: 'Blog system', ok: false }] },
        { name: 'Growth', tagline: 'For start-ups with growth ambitions', preis: '4,990', highlight: true, cta: 'Choose Growth', ctaId: 'cta-growth', features: [{ text: 'Up to 12 pages incl. blog', ok: true }, { text: 'Mobile-first & Core Web Vitals', ok: true }, { text: '100% GDPR compliant', ok: true }, { text: 'Legal notice & privacy policy', ok: true }, { text: 'GDPR contact form', ok: true }, { text: 'Unlimited revision rounds', ok: true }, { text: 'CMS + training (2h)', ok: true }, { text: 'Advanced SEO + schema', ok: true }, { text: 'Custom animations', ok: true }, { text: 'Conversion tracking setup', ok: true }, { text: 'Blog system', ok: true }] },
        { name: 'Custom', tagline: 'For complex requirements', preis: 'On request', highlight: false, cta: 'Request now', ctaId: 'cta-custom', features: [{ text: 'Unlimited pages & features', ok: true }, { text: 'Mobile-first & Core Web Vitals', ok: true }, { text: '100% GDPR compliant', ok: true }, { text: 'Legal notice & privacy policy', ok: true }, { text: 'GDPR contact form', ok: true }, { text: 'Unlimited revision rounds', ok: true }, { text: 'CMS + training (4h)', ok: true }, { text: 'Full-stack SEO audit', ok: true }, { text: 'Custom animations', ok: true }, { text: 'API integrations & booking tools', ok: true }, { text: 'Dedicated project manager', ok: true }] },
    ],
}

export default function Preise() {
    const { lang } = useLang()
    const tr = t[lang].preise
    const plans = pakete[lang]

    return (
        <section id="preise" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-6">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-sm font-medium px-5 py-2.5 rounded-full">
                        <Zap size={16} className="fill-green-500 text-green-500" />
                        {tr.guarantee}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {plans.map((p, i) => (
                        <div key={i} className={`relative rounded-3xl flex flex-col ${p.highlight ? 'bg-navy-600 text-white shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 border border-gray-100 shadow-sm'}`}>
                            {p.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">⭐ {tr.badge}</span>
                                </div>
                            )}
                            <div className="p-8 flex-1">
                                <h3 className={`text-sm font-semibold uppercase tracking-widest mb-1 ${p.highlight ? 'text-blue-300' : 'text-blue-500'}`}>{p.name}</h3>
                                <p className={`text-sm mb-5 ${p.highlight ? 'text-navy-200' : 'text-gray-500'}`}>{p.tagline}</p>
                                <div className="mb-6">
                                    {p.preis === 'Auf Anfrage' || p.preis === 'On request' ? (
                                        <div className="text-3xl font-bold font-serif">{p.preis}</div>
                                    ) : (
                                        <div className="flex items-end gap-1">
                                            <span className="text-4xl font-bold font-serif">€{p.preis}</span>
                                            <span className={`text-sm mb-1 ${p.highlight ? 'text-navy-300' : 'text-gray-400'}`}>{tr.perMonth}</span>
                                        </div>
                                    )}
                                    <p className={`text-xs mt-1 ${p.highlight ? 'text-navy-300' : 'text-gray-400'}`}>{tr.noHidden}</p>
                                </div>
                                <ul className="space-y-2.5">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm">
                                            {f.ok ? <Check size={16} className={`flex-shrink-0 mt-0.5 ${p.highlight ? 'text-green-400' : 'text-green-600'}`} /> : <X size={16} className={`flex-shrink-0 mt-0.5 ${p.highlight ? 'text-navy-400' : 'text-gray-300'}`} />}
                                            <span className={f.ok ? (p.highlight ? 'text-white' : 'text-gray-700') : (p.highlight ? 'text-navy-400' : 'text-gray-300')}>{f.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 pt-0">
                                <a href="#kontakt" id={p.ctaId} className={`w-full text-center block py-4 rounded-xl font-semibold transition-all duration-300 ${p.highlight ? 'bg-white text-navy-600 hover:bg-gray-50 shadow-lg' : 'bg-navy-600 text-white hover:bg-navy-700'}`}>
                                    {p.cta} →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <div className="mt-16 bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center font-serif">{tr.faqTitle}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {tr.faqs.map((faq, i) => (
                            <div key={i} className="flex gap-4">
                                <HelpCircle size={20} className="text-navy-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</h4>
                                    <p className="text-gray-500 text-sm">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
