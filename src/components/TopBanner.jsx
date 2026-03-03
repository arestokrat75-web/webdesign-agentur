import { useState } from 'react'
import { X, ArrowRight, Zap } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const content = {
    de: {
        text: '🎯 Limitiert: Noch',
        slots: '3 Projektplätze',
        end: 'im März frei –',
        cta: 'Jetzt sichern',
    },
    en: {
        text: '🎯 Limited: Only',
        slots: '3 project slots',
        end: 'left in March –',
        cta: 'Claim yours',
    },
}

export default function TopBanner() {
    const { lang } = useLang()
    const tr = content[lang]
    const [visible, setVisible] = useState(true)

    if (!visible) return null

    return (
        <div
            className="relative z-50 bg-navy-600 text-white text-sm"
            role="banner"
            id="top-announcement-banner"
        >
            <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-center">
                <Zap size={13} className="text-amber-400 fill-amber-400 flex-shrink-0" />
                <p className="leading-snug">
                    <span className="text-navy-200">{tr.text}</span>{' '}
                    <span className="font-bold text-white">{tr.slots}</span>{' '}
                    <span className="text-navy-200">{tr.end}</span>{' '}
                    <a
                        href="#kontakt"
                        id="banner-cta"
                        className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors ml-1"
                    >
                        {tr.cta} <ArrowRight size={12} />
                    </a>
                </p>
                <button
                    onClick={() => setVisible(false)}
                    aria-label="Banner schließen"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-300 hover:text-white transition-colors p-0.5"
                >
                    <X size={15} />
                </button>
            </div>
        </div>
    )
}
