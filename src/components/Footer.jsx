import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function Footer() {
    const { lang } = useLang()
    const tr = t[lang].footer
    const year = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">W</span>
                            </div>
                            <span className="font-serif font-bold text-white text-xl">WebCraft<span className="text-blue-400">Studio</span></span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">{tr.tagline}</p>
                        <div className="flex gap-3">
                            {['Li', 'Tw', 'Ig'].map((s) => (
                                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all text-xs font-bold">{s}</a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white text-sm mb-4">{tr.services}</h4>
                        <ul className="space-y-2.5">
                            {tr.servicesItems.map((item) => (
                                <li key={item}><a href="#leistungen" className="text-gray-400 text-sm hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white text-sm mb-4">{tr.company}</h4>
                        <ul className="space-y-2.5">
                            {tr.companyItems.map((item) => (
                                <li key={item.label}><a href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">{item.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white text-sm mb-4">{tr.legal}</h4>
                        <ul className="space-y-2.5 mb-6">
                            {tr.legalItems.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} id={`footer-${item.href.replace('#', '')}`} className="text-gray-400 text-sm hover:text-white transition-colors">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-gray-800 rounded-xl p-4 text-xs text-gray-400">
                            <div className="font-semibold text-green-400 mb-1">{tr.gdprBadge}</div>
                            <p>{tr.gdprNote}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© {year} {tr.copy}</p>
                        <p dangerouslySetInnerHTML={{ __html: tr.madeIn.replace('🌱', '<span class="text-green-400">🌱</span>') }} />
                    </div>
                </div>
            </div>
            <div id="impressum" className="sr-only">Impressum: WebCraft Studio, [Straße], [PLZ Stadt].</div>
        </footer>
    )
}
