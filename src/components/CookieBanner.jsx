import { useState, useEffect } from 'react'
import { Cookie, X, Settings } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

export default function CookieBanner() {
    const { lang } = useLang()
    const tr = t[lang].cookie
    const [visible, setVisible] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const [preferences, setPreferences] = useState({ necessary: true, analytics: false, marketing: false })

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const save = (prefs) => {
        localStorage.setItem('cookie-consent', JSON.stringify({ ...prefs, date: new Date().toISOString() }))
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-navy-600 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                        <Cookie size={18} />
                        <h2 id="cookie-title" className="font-semibold text-sm">{tr.title}</h2>
                    </div>
                    <button onClick={() => save({ necessary: true, analytics: false, marketing: false })} className="text-navy-300 hover:text-white transition-colors" aria-label={tr.close}>
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {tr.desc}{' '}
                        <a href="#datenschutz" className="underline text-navy-600 hover:text-blue-600 text-sm">{tr.privacyLink}</a>.
                    </p>

                    {showDetails && (
                        <div className="mb-4 space-y-3 text-sm border border-gray-100 rounded-xl p-4 bg-gray-50">
                            {tr.categories.map((cat, i) => {
                                const key = ['necessary', 'analytics', 'marketing'][i]
                                const disabled = i === 0
                                return (
                                    <div key={i} className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-800">{cat.label}</div>
                                            <div className="text-gray-500 text-xs mt-0.5">{cat.desc}</div>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-0.5">
                                            <input type="checkbox" checked={preferences[key]} disabled={disabled}
                                                onChange={() => !disabled && setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))}
                                                className="sr-only peer" />
                                            <div className={`w-9 h-5 rounded-full transition-colors peer-checked:bg-navy-600 ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-300'} peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-transform`} />
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <button id="cookie-accept-all" onClick={() => save({ necessary: true, analytics: true, marketing: true })} className="w-full bg-navy-600 text-white text-sm font-semibold py-3 rounded-xl hover:bg-navy-700 transition-colors">
                            {tr.acceptAll}
                        </button>
                        {showDetails ? (
                            <button id="cookie-save-preferences" onClick={() => save(preferences)} className="w-full bg-gray-100 text-gray-700 text-sm font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                                {tr.save}
                            </button>
                        ) : (
                            <button id="cookie-only-necessary" onClick={() => save({ necessary: true, analytics: false, marketing: false })} className="w-full bg-gray-100 text-gray-700 text-sm font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                                {tr.necessary}
                            </button>
                        )}
                        <button id="cookie-toggle-details" onClick={() => setShowDetails((v) => !v)} className="w-full text-gray-400 text-xs py-1 hover:text-navy-600 transition-colors flex items-center justify-center gap-1">
                            <Settings size={12} />
                            {showDetails ? tr.hideDetails : tr.details}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
