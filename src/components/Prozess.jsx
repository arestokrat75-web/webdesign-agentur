import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function Prozess() {
    const { lang } = useLang()
    const tr = t[lang].prozess

    return (
        <section id="prozess" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 top-8 bottom-8 w-px bg-gray-100 hidden md:block" />
                    <div className="space-y-8">
                        {tr.steps.map((step, i) => (
                            <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                                <div className="md:w-16 flex-shrink-0 flex md:flex-col items-center gap-4 md:gap-0">
                                    <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center text-white font-bold text-lg font-serif flex-shrink-0 shadow-md z-10">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:bg-navy-50 transition-colors duration-300 group border border-gray-100 hover:border-navy-100">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <h3 className="font-semibold text-gray-900 text-lg">{step.title}</h3>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-xs bg-white border border-gray-200 text-gray-500 px-3 py-1 rounded-full">⏱ {step.duration}</span>
                                            <span className="text-xs bg-blue-50 border border-blue-100 text-blue-600 px-3 py-1 rounded-full">📦 {step.deliverable}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-navy-600 rounded-3xl p-8 md:p-10 text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 font-serif">{tr.cta}</h3>
                    <p className="text-navy-200 mb-6">{tr.ctaSub}</p>
                    <a href="#kontakt" id="prozess-cta" className="btn-white">{tr.ctaBtn}</a>
                </div>
            </div>
        </section>
    )
}
