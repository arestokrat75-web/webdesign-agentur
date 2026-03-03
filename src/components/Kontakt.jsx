import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import t from '../i18n/translations'

const contactIcons = [Mail, Phone, MapPin, Clock]

export default function Kontakt() {
    const { lang } = useLang()
    const tr = t[lang].kontakt
    const f = tr.fields

    const [form, setForm] = useState({ name: '', email: '', firma: '', telefon: '', budget: '', leistung: '', nachricht: '', dsgvo: false })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = tr.errors.name
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = tr.errors.email
        if (!form.leistung) e.leistung = tr.errors.leistung
        if (!form.nachricht.trim()) e.nachricht = tr.errors.nachricht
        if (!form.dsgvo) e.dsgvo = tr.errors.dsgvo
        return e
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const ve = validate()
        if (Object.keys(ve).length > 0) { setErrors(ve); return }
        setErrors({}); setLoading(true)
        await new Promise((r) => setTimeout(r, 1500))
        setLoading(false); setSubmitted(true)
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    }

    if (submitted) {
        return (
            <section id="kontakt" className="py-24 bg-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{tr.successTitle}</h2>
                    <p className="text-gray-600 text-lg mb-6">{tr.successSub}</p>
                    <div className="bg-navy-50 rounded-2xl p-6 text-left">
                        <h3 className="font-semibold text-navy-600 mb-3">{tr.successTitle2}</h3>
                        <ol className="space-y-2 text-sm text-gray-600">
                            {tr.successSteps.map((s, i) => <li key={i}>✓ {s}</li>)}
                        </ol>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="kontakt" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="section-label">{tr.label}</p>
                    <h2 className="section-title mb-4">
                        {tr.h2a} <span className="text-gradient">{tr.h2b}</span>
                    </h2>
                    <p className="section-subtitle">{tr.sub}</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-5 font-serif">{tr.directTitle}</h3>
                            <div className="space-y-4">
                                {tr.contactItems.map((item, i) => {
                                    const Icon = contactIcons[i]
                                    return (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Icon size={18} className="text-navy-600" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-400 font-medium">{item.label}</div>
                                                <div className="text-gray-900 font-medium text-sm">{item.value}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="bg-navy-600 text-white rounded-2xl p-6">
                            <h4 className="font-semibold mb-4 font-serif">{tr.promiseTitle}</h4>
                            <ul className="space-y-2.5 text-sm text-navy-100">
                                {tr.promises.map((p, i) => <li key={i} className="flex items-center gap-2"><span className="text-green-400">✓</span> {p}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} noValidate className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                            <div className="grid sm:grid-cols-2 gap-5">
                                {[
                                    { id: 'name', label: f.name, ph: f.namePh, type: 'text' },
                                    { id: 'email', label: f.email, ph: f.emailPh, type: 'email' },
                                    { id: 'firma', label: f.firma, ph: f.firmaPh, type: 'text' },
                                    { id: 'telefon', label: f.telefon, ph: f.telefonPh, type: 'tel' },
                                ].map(({ id, label, ph, type }) => (
                                    <div key={id}>
                                        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                                        <input id={id} name={id} type={type} value={form[id]} onChange={handleChange} placeholder={ph}
                                            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-300 transition-shadow ${errors[id] ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} />
                                        {errors[id] && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors[id]}</p>}
                                    </div>
                                ))}

                                {/* Leistung */}
                                <div>
                                    <label htmlFor="leistung" className="block text-sm font-medium text-gray-700 mb-1.5">{f.leistung}</label>
                                    <select id="leistung" name="leistung" value={form.leistung} onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-300 appearance-none ${errors.leistung ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
                                        <option value="">{f.leistungPh}</option>
                                        {tr.leistungen.map((l) => <option key={l} value={l}>{l}</option>)}
                                    </select>
                                    {errors.leistung && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.leistung}</p>}
                                </div>

                                {/* Budget */}
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">{f.budget}</label>
                                    <select id="budget" name="budget" value={form.budget} onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-300 appearance-none">
                                        <option value="">{f.budgetPh}</option>
                                        {tr.budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* Nachricht */}
                            <div className="mt-5">
                                <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-1.5">{f.nachricht}</label>
                                <textarea id="nachricht" name="nachricht" rows={4} value={form.nachricht} onChange={handleChange} placeholder={f.nachrichtPh}
                                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-navy-300 resize-none ${errors.nachricht ? 'border-red-300 bg-red-50' : 'border-gray-200'}`} />
                                {errors.nachricht && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.nachricht}</p>}
                            </div>

                            {/* DSGVO */}
                            <div className="mt-5">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input id="dsgvo" name="dsgvo" type="checkbox" checked={form.dsgvo} onChange={handleChange} className="mt-1 w-4 h-4 rounded border-gray-300 text-navy-600 focus:ring-navy-300 flex-shrink-0" />
                                    <span className="text-xs text-gray-500 leading-relaxed">
                                        {f.dsgvo} <a href="#datenschutz" className="underline text-navy-600 hover:text-blue-600">{f.dsgvoLink}</a>. *
                                    </span>
                                </label>
                                {errors.dsgvo && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 ml-7"><AlertCircle size={12} /> {errors.dsgvo}</p>}
                            </div>

                            <button id="form-submit" type="submit" disabled={loading} className="mt-6 w-full btn-primary justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed">
                                {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> {f.submitting}</> : <>{f.submit} <ArrowRight size={18} /></>}
                            </button>
                            <p className="text-xs text-gray-400 text-center mt-3">{f.note}</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
