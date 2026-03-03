import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const cases = [
    {
        firma: 'TechStart GmbH', branche: { de: 'SaaS / B2B', en: 'SaaS / B2B' }, ergebnis: '+340% Conversions', lieferzeit: '23 Tage / 23 days', bg: 'from-blue-500 to-navy-600', letter: 'T',
        desc: { de: 'Kompletter Relaunch des Webauftritts für ein B2B-SaaS-Start-up. Neue Landingpage mit Conversion-optimierter Preisgestaltung und Onboarding-Flow.', en: 'Complete relaunch for a B2B SaaS start-up. New landing page with conversion-optimized pricing and onboarding flow.' }
    },
    {
        firma: 'GreenBuild Solutions', branche: { de: 'CleanTech / B2B', en: 'CleanTech / B2B' }, ergebnis: '1,2 Mio. € Seed', lieferzeit: '19 Tage / 19 days', bg: 'from-green-500 to-teal-600', letter: 'G',
        desc: { de: 'MVP-Website für ein CleanTech-Start-up vor dem ersten Fundraising. Investoren-überzeugendes Design, DSGVO-konform.', en: 'MVP website for a CleanTech start-up before their first fundraising. Investor-ready design, fully GDPR compliant.' }
    },
    {
        firma: 'HealthNow UG', branche: { de: 'HealthTech / B2C', en: 'HealthTech / B2C' }, ergebnis: '-81% Ladezeit', lieferzeit: '28 Tage / 28 days', bg: 'from-purple-500 to-pink-600', letter: 'H',
        desc: { de: 'Neue Patientenseite mit Online-Buchungssystem. Ladezeit von 5,2s auf 0,9s reduziert.', en: 'New patient website with online booking. Load time reduced from 5.2s to 0.9s.' }
    },
    {
        firma: 'LegalTech Startup AG', branche: { de: 'Legal / FinTech', en: 'Legal / FinTech' }, ergebnis: '+220% Leads', lieferzeit: '31 Tage / 31 days', bg: 'from-amber-500 to-orange-600', letter: 'L',
        desc: { de: 'Trust-orientiertes Design für einen hoch regulierten Markt. Vollständige DSGVO-Compliance, verschlüsselte Formulare.', en: 'Trust-oriented design for a highly regulated market. Full GDPR compliance, encrypted contact forms.' }
    },
    {
        firma: 'FoodTech GmbH', branche: { de: 'Food / E-Commerce', en: 'Food / E-Commerce' }, ergebnis: '+190% Mobile', lieferzeit: '26 Tage / 26 days', bg: 'from-red-500 to-orange-500', letter: 'F',
        desc: { de: 'Von Wix zu einem professionellen React-Stack migriert. Mobile-First-Ansatz steigerte mobile Conversions massiv.', en: 'Migrated from Wix to a professional React stack. Mobile-first approach massively increased mobile conversions.' }
    },
    {
        firma: 'EduStart gGmbH', branche: { de: 'EdTech / Non-Profit', en: 'EdTech / Non-Profit' }, ergebnis: '3× mehr Spenden', lieferzeit: '21 Tage / 21 days', bg: 'from-teal-500 to-blue-500', letter: 'E',
        desc: { de: 'Non-Profit-Website mit Spendenformular, DSGVO-konform, selbst pflegbar.', en: 'Non-profit website with donation form, GDPR compliant, self-manageable CMS.' }
    },
]

export default function Referenzen() {
    const { lang } = useLang()
    const tr = t[lang].ref

    return (
        <section id="referenzen" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((ref, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                            <div className={`bg-gradient-to-br ${ref.bg} p-8 flex items-center gap-4`}>
                                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold font-serif">{ref.letter}</div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{ref.firma}</h3>
                                    <span className="text-white/70 text-xs font-medium">{ref.branche[lang]}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">{ref.desc[lang]}</p>
                                <div className="flex gap-3">
                                    <div className="flex-1 bg-green-50 rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold text-green-700 font-serif">{ref.ergebnis}</div>
                                        <div className="text-xs text-green-600">{tr.ergebnis}</div>
                                    </div>
                                    <div className="flex-1 bg-blue-50 rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold text-blue-700 font-serif">{lang === 'de' ? ref.lieferzeit.split(' / ')[0] : ref.lieferzeit.split(' / ')[1]}</div>
                                        <div className="text-xs text-blue-600">{tr.lieferzeit}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-400 mt-8">{tr.disclaimer}</p>
            </div>
        </section>
    )
}
