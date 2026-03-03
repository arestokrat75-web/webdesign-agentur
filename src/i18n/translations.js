const t = {
    de: {
        // ── Navbar ──
        nav: {
            links: [
                { href: '#leistungen', label: 'Leistungen' },
                { href: '#prozess', label: 'Prozess' },
                { href: '#referenzen', label: 'Referenzen' },
                { href: '#blog', label: 'Blog' },
                { href: '#faq', label: 'FAQ' },
                { href: '#preise', label: 'Preise' },
                { href: '#kontakt', label: 'Kontakt' },
            ],
            cta: 'Projekt anfragen',
            ctaSub: 'Kostenlos beraten lassen',
            mobileCtaBtn: 'Kostenlose Erstberatung',
        },

        // ── Hero ──
        hero: {
            badge: 'Webdesign Agentur für Gründer & Start-ups in Deutschland',
            h1a: 'Echtes Wachstum –',
            h1b: 'nicht nur ein Baukasten-Design',
            sub: 'Wir bauen hochkonvertierende, 100% DSGVO-konforme Websites für Gründer und Start-ups –',
            subBold: 'mit Festpreisgarantie, ohne Vendor-Lock-in',
            subEnd: 'und mit termingerechter Lieferung für deinen nächsten Pitch.',
            ctaPrimary: 'Kostenlose Erstberatung',
            ctaSecondary: 'Referenzen ansehen',
            stats: [
                { value: '120+', label: 'Projekte umgesetzt' },
                { value: '98%', label: 'Kundenzufriedenheit' },
                { value: '4 Wo.', label: 'Ø Lieferzeit' },
                { value: '0€', label: 'Versteckte Kosten' },
            ],
            badges: [
                '100% DSGVO-konform',
                'Go-Live in 4 Wochen',
                'Festpreisgarantie',
                'Keine versteckten Kosten',
            ],
            cardTitle: 'Projekt abgeschlossen',
            cardSub: 'Gerade eben',
            cardDesc: 'TechStart GmbH – Go-Live in',
            cardDays: '23 Tagen ✓',
            cardLabel: 'Conversion-Rate gesteigert um',
        },

        // ── PainPoints ──
        pain: {
            label: 'Wir kennen deine Ängste',
            h2a: 'Schluss mit Agentur-Ghosting &',
            h2b: 'Blackbox-Rechnungen',
            sub: 'Wir haben mit über 400 Gründern gesprochen. Das sind die echten Probleme, die dich nachts wachhalten – und die wir systematisch lösen.',
            items: [
                {
                    title: '"Blackbox-Rechnung" & versteckte Kosten',
                    desc: 'Du bekamst ein Angebot, am Ende kam die doppelte Rechnung – für Lizenzen, Plugins, "Zusatzaufwand". Damit ist jetzt Schluss.',
                    quote: '"Ich hatte keine Ahnung, was ich am Ende wirklich zahle."',
                },
                {
                    title: 'Agentur-Ghosting & verpasste Deadlines',
                    desc: 'Der Projektmanager antwortet seit Tagen nicht. Dein Pitch rückt näher. Die Website ist immer noch nicht live.',
                    quote: '"Ich musste meinen Launch verschieben, weil die Agentur einfach abtauchte."',
                },
                {
                    title: 'DSGVO-Falle & Abmahnangst',
                    desc: 'Ein falsches Cookie-Banner, der falsche Server-Standort – und schon droht eine teure Abmahnung. Gründer in Deutschland kennen diese Angst.',
                    quote: '"Ich habe nachts wach gelegen und mir Sorgen um Abmahnungen gemacht."',
                },
                {
                    title: 'Vendor-Lock-in & Ohnmacht',
                    desc: 'Die Agentur nutzt ihr eigenes CMS. Für jedes neue Bild, jeden kleinen Textfix zahlst du und wartest tagelang. Du bist gefangen.',
                    quote: '"Ich bin komplett abhängig – das kostet mich Zeit und Nerven."',
                },
                {
                    title: 'Mobile-Desaster & langsame Ladezeiten',
                    desc: 'Die Website sieht in der Präsentation toll aus, ist aber auf dem Smartphone unbrauchbar. Google straft euch ab, Kunden springen ab.',
                    quote: '"Über 70% meiner Besucher kamen per Handy – und die Seite war eine Katastrophe."',
                },
                {
                    title: 'Gutes Design, null Conversions',
                    desc: 'Die Website sieht hochwertig aus – aber es kommen keine Leads, keine Anfragen. Verkaufspsychologie und UX wurden schlicht vergessen.',
                    quote: '"Schöne Website, aber kein einziger Kunde kam darüber."',
                },
            ],
            ctaBottom: 'Du erkennst dich wieder?',
            ctaBottomSub: 'Wir haben diese Fehler selbst erlebt – und genau deshalb arbeiten wir anders. Kein Ghosting, kein Lock-in, keine Überraschungen.',
            ctaBtn: 'Jetzt Problem lösen →',
        },

        // ── USPs ──
        usps: {
            label: 'Unsere Versprechen',
            h2a: 'Deine Website:',
            h2b: 'blitzschnell, rechtssicher & in deiner Hand',
            sub: 'Sechs Versprechen, die wir schriftlich geben – und die du von anderen Agenturen so nicht bekommst.',
            items: [
                { title: '100 % DSGVO-konform – Null Abmahnrisiko', desc: 'Jede Website, die wir bauen, ist von Anfang an datenschutzkonform. Korrektes Cookie-Banner, Impressum, Server in Deutschland. Kein Anwaltsbrief, keine schlaflosen Nächte.', highlight: 'Null Abmahn-Risiko' },
                { title: 'Radikale Preis-Transparenz – Keine Blackbox', desc: 'Du bekommst ein detailliertes Angebot: Wie viele Stunden für Design, Entwicklung, Projektmanagement. Festpreis. Keine Überraschungsrechnung am Ende.', highlight: 'Festpreisgarantie' },
                { title: 'Volle Unabhängigkeit – Kein Vendor-Lock-in', desc: 'Wir bauen auf WordPress oder React – offene Standards. Du kannst jederzeit selbst Texte ändern, Bilder hochladen. Und wenn du die Agentur wechseln willst: kein Problem.', highlight: '100 % deine Website' },
                { title: 'Blitzschnell & Mobile-First – Kein Desaster', desc: 'Core Web Vitals optimiert. Ladezeit unter 1,5 Sekunden. Auf jedem Smartphone perfekt – nicht nur im Agentur-Showroom. Google liebt uns, deine Kunden auch.', highlight: 'Top Google-Score' },
                { title: 'Websites, die konvertieren – echter ROI', desc: 'Wir denken wie Unternehmer, nicht wie Designer. Jedes Element deiner Website hat ein Ziel: Leads, Anfragen, Verkäufe. Wir messen, was funktioniert.', highlight: 'Messbare Ergebnisse' },
                { title: 'Echter Support – Kein Ghosting. Niemals.', desc: 'Fester Ansprechpartner, der von Tag 1 bis nach dem Go-Live für dich da ist. Reaktionszeit unter 24h. Bei kritischen Bugs sogar unter 2h.', highlight: '< 24h Reaktionszeit' },
            ],
            othersTitle: '❌ Andere Agenturen',
            othersItems: ['Blackbox-Angebote ohne Stundenzahl', 'DSGVO als Nachgedanke', 'Proprietäre CMS = Lock-in', '"Der Neffe macht das billiger"', 'Schönes Design, keine Conversions', 'Ghosting nach dem Go-Live'],
            ourTitle: '✅ WebCraft Studio',
            ourItems: ['Detaillierter Festpreis von Anfang an', 'DSGVO-first – kein Abmahnrisiko', 'Open-Source-Stack – du gehst frei', 'Messbarer ROI durch Conversion-Optimierung', 'Blitzschnell & Mobile-First', 'Persönlicher Ansprechpartner, immer erreichbar'],
        },

        // ── Prozess ──
        prozess: {
            label: 'Kein Rätsel, kein Ghosting',
            h2a: 'Unser Prozess –',
            h2b: 'transparent von Tag 1',
            sub: 'Du weißt zu jedem Zeitpunkt genau, was passiert, was es kostet und wann du fertig bist.',
            steps: [
                { title: 'Kostenloses Erstgespräch (30 Min.)', desc: 'Wir lernen dein Geschäftsmodell und deine Zielgruppe kennen. Kein Sales-Pitch – ein echtes strategisches Gespräch. Du verlässt das Call mit konkreten nächsten Schritten.', duration: '30 Minuten', deliverable: 'Strategie-Briefing' },
                { title: 'Transparentes Angebot (Kein Blackbox)', desc: 'Du bekommst ein detailliertes Angebot mit genau aufgelisteten Stunden pro Phase. Festpreis. Keine Extras, keine Überraschungen.', duration: '3 Werktage', deliverable: 'Detailliertes Festpreisangebot' },
                { title: 'Design & Entwicklung (Wöchentliche Updates)', desc: 'Wir arbeiten in kurzen Sprints. Du siehst jeden Freitag den aktuellen Stand. Kein Ghosting. Feedback wird innerhalb von 24h eingebaut.', duration: '3–4 Wochen', deliverable: 'Wöchentliche Review-Calls' },
                { title: 'DSGVO-Check & QA-Testing', desc: 'Bevor die Seite live geht, prüfen wir: Alle Browser, alle Smartphones, alle Formulare. DSGVO-Audit inklusive.', duration: '3 Tage', deliverable: 'DSGVO-Zertifikat, QA-Report' },
                { title: 'Go-Live & Schlüsselübergabe', desc: 'Wir gehen live – termingerecht. Du bekommst eine persönliche Einführung ins Backend, damit du selbständig Texte und Bilder ändern kannst. Kein Lock-in.', duration: '1 Tag', deliverable: 'Live-Website, Schulung, Admin-Zugang' },
                { title: 'Faire Post-Launch-Betreuung', desc: 'In den ersten 30 Tagen nach Go-Live beheben wir alle Bugs kostenlos. Danach: faire, transparente Wartungspauschalen – kein Wucher.', duration: '30 Tage Garantie', deliverable: 'Bug-Garantie, optionaler Wartungsvertrag' },
            ],
            cta: 'Von Erstgespräch bis Go-Live: 4–5 Wochen',
            ctaSub: 'Termingerechte Lieferung – für deinen nächsten Pitch, Launch oder Investor-Meeting.',
            ctaBtn: 'Jetzt Termin vereinbaren →',
        },

        // ── Referenzen ──
        ref: {
            label: 'Unsere Arbeit',
            h2a: 'Start-ups, deren',
            h2b: 'Geschäftsmodelle wir verstanden',
            sub: 'Keine geschönten Agentur-Showcases. Echte Gründer, echte Zahlen, echte Ergebnisse.',
            ergebnis: 'Ergebnis',
            lieferzeit: 'Lieferzeit',
            disclaimer: '* Daten anonymisiert. Referenzen auf Anfrage mit Namensnennung erhältlich.',
        },

        // ── Testimonials ──
        testi: {
            label: 'Echte Stimmen, echte Gründer',
            h2a: 'Was unsere Kunden',
            h2b: 'wirklich sagen',
            sub: 'Keine gefälschten Bewertungen. Echte Menschen, die echte Probleme mit uns gelöst haben.',
            ratingLabel: 'aus 127 Bewertungen',
            items: [
                { highlight: 'In 23 Tagen live – pünktlich zum Pitch', text: 'Nach zwei gescheiterten Versuchen mit anderen Agenturen war ich skeptisch. WebCraft Studio hat mich komplett überzeugt. Kein Ghosting, kein Blackbox-Angebot – ich wusste zu jeder Zeit genau, wo mein Geld hingeht. Die Website war in 23 Tagen live, pünktlich vor unserem Series-A-Pitch.' },
                { highlight: 'DSGVO-Sorglos-Paket – endlich Ruhe', text: 'Die DSGVO-Thematik hat uns als deutsches Start-up extrem beschäftigt. WebCraft hat uns nicht nur eine Website gebaut, sondern uns durch den juristischen Dschungel geführt. Cookie-Banner, Impressum, Server-Standort – alles sauber. Keine Abmahngefahr mehr.' },
                { highlight: 'Von Lock-in zu 100 % Freiheit', text: 'Ich hatte bei meiner alten Agentur ein proprietäres CMS, konnte nichts selbst ändern und zahlte 300€ pro Monat für Kleinigkeiten. Seit dem Wechsel zu WebCraft bin ich völlig frei. Ich ändere Texte selbst, lade Fotos hoch.' },
            ],
        },

        // ── Preise ──
        preise: {
            label: 'Faire & transparente Preise',
            h2a: 'Faire Partnerschaft –',
            h2b: 'kein Wucher-Retainer',
            sub: 'Festpreise, keine versteckten Kosten, keine Abo-Fallen. Du weißt vor der Unterschrift, was du zahlst.',
            guarantee: 'Festpreisgarantie – keine Überraschungsrechnungen',
            badge: 'Beliebteste Wahl',
            perMonth: 'einmalig',
            noHidden: 'Alle Preise zzgl. gesetzl. MwSt. · Keine Folgekosten',
            faqTitle: 'Häufige Fragen zu den Preisen',
            faqs: [
                { q: 'Gibt es eine Vorauszahlung?', a: '50% bei Auftragserteilung, 50% bei Abnahme. Kein 100%-Cash-Out auf einmal.' },
                { q: 'Was ist nicht im Preis enthalten?', a: 'Domain und Hosting (ca. 8–15€/Monat) sind nicht enthalten – wir empfehlen Anbieter mit deutschen Server-Standorten.' },
                { q: 'Kann ich nach Go-Live selbst Änderungen machen?', a: 'Ja. Das ist unser Versprechen. Keine Anbindung an uns. Volle Kontrolle.' },
                { q: 'Was kostet Wartung nach dem Launch?', a: 'Optionaler Wartungsvertrag ab 49€/Monat (Updates, Backups, Monitoring) – aber kein Zwang.' },
            ],
        },

        // ── FAQ ──
        faq: {
            label: 'Häufige Fragen',
            h2a: 'Alle Antworten –',
            h2b: 'kein Kleingedrucktes',
            sub: 'Die Fragen, die Gründer am häufigsten stellen – ehrlich und direkt beantwortet.',
            notFound: 'Deine Frage ist nicht dabei?',
            notFoundSub: 'Schreib uns direkt – wir antworten in unter 24 Stunden.',
            ctaBtn: 'Frage stellen →',
        },

        // ── Blog ──
        blog: {
            label: 'Einblicke für smarte Gründer',
            h2: 'Unser Blog',
            sub: 'Praxiswissen zu Webdesign, DSGVO, Conversion und Technik – geschrieben von Machern für Gründer.',
            allArticles: 'Alle Artikel',
            read: 'Lesen',
            newsletterTitle: 'Kein Spam. Nur Wissen, das hilft.',
            newsletterSub: 'Monatlich 1 E-Mail mit den besten Tipps zu Webdesign, DSGVO und Conversion für Gründer. Jederzeit abmeldbar.',
            newsletterPlaceholder: 'deine@email.de',
            newsletterBtn: 'Anmelden →',
            newsletterNote: 'DSGVO-konform · Keine Weitergabe an Dritte · Abmeldung jederzeit möglich',
        },

        // ── Kontakt ──
        kontakt: {
            label: 'Kostenloses Erstgespräch',
            h2a: 'Bereit für eine Website,',
            h2b: 'die wirklich konvertiert?',
            sub: 'Kein Sales-Druck. Ein echtes strategisches Gespräch – auch wenn du dich danach gegen uns entscheidest, nimmst du konkrete Erkenntnisse mit.',
            directTitle: 'Direkt erreichbar',
            contactItems: [
                { label: 'E-Mail', value: 'hello@webcraft-studio.de' },
                { label: 'Telefon', value: '+49 151 234 567 89' },
                { label: 'Standort', value: 'Remote & Deutschland-weit' },
                { label: 'Reaktionszeit', value: '< 24 Stunden (garantiert)' },
            ],
            promiseTitle: 'Unser Versprechen an dich',
            promises: ['Antwort in unter 24 Stunden', 'Kein Sales-Druck – ehrliche Einschätzung', 'Kostenloses 30-Min. Strategiegespräch', 'Unverbindliches Festpreis-Angebot'],
            fields: {
                name: 'Name', namePh: 'Max Mustermann',
                email: 'E-Mail', emailPh: 'max@startup.de',
                firma: 'Firma / Start-up', firmaPh: 'TechStart GmbH',
                telefon: 'Telefon (optional)', telefonPh: '+49 151 234 567',
                leistung: 'Gewünschte Leistung *', leistungPh: 'Bitte wählen ...',
                budget: 'Dein Budget (optional)', budgetPh: 'Bitte wählen ...',
                nachricht: 'Dein Projekt – kurz beschrieben *', nachrichtPh: 'Was machst du, wer ist deine Zielgruppe, was brauchst du?',
                dsgvo: 'Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. Die Daten werden nicht an Dritte weitergegeben.',
                dsgvoLink: 'Datenschutzerklärung',
                submit: 'Kostenlose Erstberatung anfragen',
                submitting: 'Wird gesendet ...',
                note: '* Pflichtfelder · Kein Spam · Antwort in unter 24h',
            },
            budgets: ['Unter 2.500 €', '2.500 – 5.000 €', '5.000 – 10.000 €', 'Über 10.000 €', 'Noch nicht sicher'],
            leistungen: ['Neue Website erstellen', 'Bestehende Website überarbeiten', 'Landing Page (Single-Page)', 'E-Commerce / Online-Shop', 'SEO-Optimierung', 'Sonstiges'],
            errors: { name: 'Bitte gib deinen Namen ein.', email: 'Bitte gib eine gültige E-Mail-Adresse ein.', leistung: 'Bitte wähle eine Leistung aus.', nachricht: 'Bitte beschreibe kurz dein Projekt.', dsgvo: 'Bitte stimme der Datenschutzerklärung zu.' },
            successTitle: 'Deine Anfrage ist angekommen! 🎉',
            successSub: 'Wir melden uns innerhalb von 24 Stunden bei dir – garantiert kein Ghosting.',
            successSteps: ['Wir prüfen deine Anfrage', 'Wir schlagen 3 kostenlose Gesprächstermine vor', 'Du erhältst ein schriftliches Strategie-Briefing'],
            successTitle2: 'Was jetzt passiert:',
        },

        // ── Cookie ──
        cookie: {
            title: 'Cookie-Einstellungen',
            close: 'Schließen (nur notwendige Cookies)',
            desc: 'Diese Website verwendet Cookies, um dir die bestmögliche Nutzungserfahrung zu bieten.',
            privacyLink: 'Datenschutzerklärung',
            acceptAll: 'Alle akzeptieren',
            necessary: 'Nur notwendige Cookies',
            save: 'Einstellungen speichern',
            details: 'Cookie-Einstellungen anpassen',
            hideDetails: 'Details ausblenden',
            categories: [
                { label: 'Notwendige Cookies', desc: 'Für die Grundfunktionen der Website. Immer aktiv.' },
                { label: 'Analyse-Cookies', desc: 'Helfen uns zu verstehen, wie Besucher die Website nutzen (anonymisiert).' },
                { label: 'Marketing-Cookies', desc: 'Für personalisierte Werbung auf Drittplattformen.' },
            ],
            gdprNote: 'DSGVO-konform · Keine Weitergabe an Dritte · Abmeldung jederzeit möglich',
        },

        // ── Footer ──
        footer: {
            tagline: 'Hochkonvertierende, rechtssichere Websites für Gründer und Start-ups in Deutschland. Kein Ghosting. Kein Lock-in. Kein Bullshit.',
            services: 'Leistungen',
            company: 'Unternehmen',
            legal: 'Rechtliches',
            servicesItems: ['Webdesign für Start-ups', 'Landing Pages', 'SEO-Optimierung', 'DSGVO-Beratung', 'CMS-Einrichtung', 'Website-Relaunch'],
            companyItems: [{ label: 'Über uns', href: '#' }, { label: 'Referenzen', href: '#referenzen' }, { label: 'Preise', href: '#preise' }, { label: 'Prozess', href: '#prozess' }, { label: 'Blog', href: '#blog' }, { label: 'Kontakt', href: '#kontakt' }],
            legalItems: [{ label: 'Impressum', href: '#impressum' }, { label: 'Datenschutzerklärung', href: '#datenschutz' }, { label: 'AGB', href: '#agb' }, { label: 'Cookie-Einstellungen', href: '#cookies' }],
            gdprBadge: '🔒 DSGVO-konform',
            gdprNote: 'Server in Deutschland. Keine Datenweitergabe an Dritte.',
            copy: 'WebCraft Studio – Webdesign für Gründer & Start-ups. Alle Rechte vorbehalten.',
            madeIn: 'Gebaut mit ❤️ in Deutschland · 🌱 CO₂-neutral gehostet',
        },
    },

    // ═══════════════════════════════════════════════
    //  ENGLISH
    // ═══════════════════════════════════════════════
    en: {
        nav: {
            links: [
                { href: '#leistungen', label: 'Services' },
                { href: '#prozess', label: 'Process' },
                { href: '#referenzen', label: 'Work' },
                { href: '#blog', label: 'Blog' },
                { href: '#faq', label: 'FAQ' },
                { href: '#preise', label: 'Pricing' },
                { href: '#kontakt', label: 'Contact' },
            ],
            cta: 'Start a project',
            ctaSub: 'Free consultation',
            mobileCtaBtn: 'Free consultation',
        },

        hero: {
            badge: 'Web Design Agency for Founders & Start-ups in Germany',
            h1a: 'Real Growth –',
            h1b: 'not just another template design',
            sub: 'We build high-converting, 100% GDPR-compliant websites for founders and start-ups –',
            subBold: 'fixed price, no vendor lock-in,',
            subEnd: 'delivered on time for your next pitch.',
            ctaPrimary: 'Free consultation',
            ctaSecondary: 'View our work',
            stats: [
                { value: '120+', label: 'Projects delivered' },
                { value: '98%', label: 'Client satisfaction' },
                { value: '4 wks', label: 'Avg. delivery time' },
                { value: '€0', label: 'Hidden costs' },
            ],
            badges: ['100% GDPR-compliant', 'Go-live in 4 weeks', 'Fixed-price guarantee', 'No hidden costs'],
            cardTitle: 'Project completed',
            cardSub: 'just now',
            cardDesc: 'TechStart GmbH – live in',
            cardDays: '23 days ✓',
            cardLabel: 'Conversion rate increased by',
        },

        pain: {
            label: 'We know your fears',
            h2a: 'No more Agency Ghosting &',
            h2b: 'Blackbox Invoices',
            sub: 'We\'ve spoken with over 400 founders. These are the real problems keeping you up at night – and we solve them systematically.',
            items: [
                { title: '"Blackbox Invoice" & hidden costs', desc: 'You got a quote, then the final invoice was double – licenses, plugins, "extra work". That ends now.', quote: '"I had no idea what I\'d actually pay in the end."' },
                { title: 'Agency ghosting & missed deadlines', desc: 'The project manager has been silent for days. Your pitch is coming up. The website still isn\'t live.', quote: '"I had to postpone my launch because the agency simply disappeared."' },
                { title: 'GDPR trap & legal risk', desc: 'A wrong cookie banner, the wrong server location – and an expensive legal warning is on its way. Every German founder knows this fear.', quote: '"I lay awake at night worrying about legal warnings."' },
                { title: 'Vendor lock-in & helplessness', desc: 'The agency uses its own CMS. Every new image, every small text fix costs you money and days of waiting. You\'re trapped.', quote: '"I\'m completely dependent on them – it costs me time and nerves."' },
                { title: 'Mobile disaster & slow loading', desc: 'The site looks great in agency presentations, but is unusable on smartphones. Google penalizes you, customers bounce.', quote: '"70%+ of my visitors used mobile – and the site was a disaster."' },
                { title: 'Great design, zero conversions', desc: 'The website looks premium – but no leads come in. Sales psychology and UX were simply forgotten.', quote: '"Beautiful site, but not a single customer came through it."' },
            ],
            ctaBottom: 'Does this sound familiar?',
            ctaBottomSub: 'We\'ve experienced these mistakes ourselves – that\'s exactly why we work differently. No ghosting, no lock-in, no surprises.',
            ctaBtn: 'Solve my problem →',
        },

        usps: {
            label: 'Our Promises',
            h2a: 'Your website:',
            h2b: 'lightning fast, legally secure & fully yours',
            sub: 'Six promises we make in writing – ones you won\'t get from other agencies.',
            items: [
                { title: '100% GDPR-compliant – Zero legal risk', desc: 'Every website we build is privacy-compliant from day one. Correct cookie banner, legal notice, servers in Germany. No scary lawyer letters.', highlight: 'Zero legal risk' },
                { title: 'Radical price transparency – No blackbox', desc: 'You get a detailed quote: exact hours for design, development, project management. Fixed price. No surprise invoice at the end.', highlight: 'Fixed-price guarantee' },
                { title: 'Full independence – No vendor lock-in', desc: 'We build on WordPress or React – open standards. You can change text, upload images anytime. Want to switch agencies? No problem.', highlight: '100% your website' },
                { title: 'Lightning fast & Mobile-First – No disaster', desc: 'Core Web Vitals optimized. Load time under 1.5 seconds. Perfect on every phone – not just in the agency showroom. Google loves us, your customers too.', highlight: 'Top Google score' },
                { title: 'Websites that convert – Real ROI', desc: 'We think like entrepreneurs, not designers. Every element of your website has a goal: leads, inquiries, sales. We measure what works.', highlight: 'Measurable results' },
                { title: 'Real support – No ghosting. Ever.', desc: 'Dedicated contact person from day 1 through post-launch. Response time under 24h. For critical bugs even under 2h.', highlight: '< 24h response time' },
            ],
            othersTitle: '❌ Other agencies',
            othersItems: ['Blackbox quotes without hour breakdown', 'GDPR as an afterthought', 'Proprietary CMS = lock-in', '"My nephew does it cheaper"', 'Nice design, no conversions', 'Ghosting after go-live'],
            ourTitle: '✅ WebCraft Studio',
            ourItems: ['Detailed fixed price from the start', 'GDPR-first – zero legal risk', 'Open-source stack – you stay free', 'Measurable ROI through conversion optimization', 'Lightning fast & Mobile-First', 'Personal contact, always reachable'],
        },

        prozess: {
            label: 'No mystery, no ghosting',
            h2a: 'Our process –',
            h2b: 'transparent from day one',
            sub: 'At every point you know exactly what\'s happening, what it costs and when you\'re done.',
            steps: [
                { title: 'Free discovery call (30 min.)', desc: 'We learn about your business model and audience. No sales pitch – a real strategic conversation. You leave with concrete next steps.', duration: '30 minutes', deliverable: 'Strategy briefing' },
                { title: 'Transparent quote (no blackbox)', desc: 'You get a detailed quote with exact hours per phase. Fixed price. No extras, no surprises.', duration: '3 business days', deliverable: 'Detailed fixed-price quote' },
                { title: 'Design & development (weekly updates)', desc: 'We work in short sprints. You see the current status every Friday. No ghosting. Feedback is implemented within 24h.', duration: '3–4 weeks', deliverable: 'Weekly review calls' },
                { title: 'GDPR check & QA testing', desc: 'Before going live, we test: all browsers, all phones, all forms. GDPR audit included. You sign off when you\'re 100% happy.', duration: '3 days', deliverable: 'GDPR certificate, QA report' },
                { title: 'Go-live & handover', desc: 'We go live – on schedule. You get a personal onboarding to the backend so you can edit content independently. No lock-in. You\'re free.', duration: '1 day', deliverable: 'Live website, training, admin access' },
                { title: 'Fair post-launch care', desc: 'In the first 30 days after go-live, we fix all bugs for free. After that: fair, transparent maintenance fees – no rip-offs. Or you handle it yourself. Your choice.', duration: '30-day guarantee', deliverable: 'Bug guarantee, optional maintenance contract' },
            ],
            cta: 'Discovery call to go-live: 4–5 weeks',
            ctaSub: 'On-time delivery – for your next pitch, launch or investor meeting.',
            ctaBtn: 'Book a call →',
        },

        ref: {
            label: 'Our work',
            h2a: 'Start-ups whose',
            h2b: 'business models we understood',
            sub: 'No polished agency showcases. Real founders, real numbers, real results.',
            ergebnis: 'Result',
            lieferzeit: 'Delivery time',
            disclaimer: '* Data anonymized. References with full company names available on request.',
        },

        testi: {
            label: 'Real voices, real founders',
            h2a: 'What our clients',
            h2b: 'actually say',
            sub: 'No fake reviews. Real people who solved real problems with us.',
            ratingLabel: 'from 127 reviews',
            items: [
                { highlight: 'Live in 23 days – on time for the pitch', text: 'After two failed attempts with other agencies, I was skeptical. WebCraft Studio completely won me over. No ghosting, no blackbox quote – I always knew exactly where my money was going. The website went live in 23 days, right before our Series A pitch.' },
                { highlight: 'GDPR peace of mind – finally', text: 'As a German start-up, GDPR was a huge concern. WebCraft didn\'t just build us a website, they guided us through the legal jungle. Cookie banner, imprint, server location – everything correct. No more warning letters.' },
                { highlight: 'From lock-in to 100% freedom', text: 'My old agency used a proprietary CMS, I couldn\'t change anything myself and paid €300/month for tiny updates. Since switching to WebCraft I\'m completely free. I update texts and photos myself.' },
            ],
        },

        preise: {
            label: 'Fair & transparent pricing',
            h2a: 'Fair partnership –',
            h2b: 'no rip-off retainers',
            sub: 'Fixed prices, no hidden costs, no subscription traps. You know before signing what you pay.',
            guarantee: 'Fixed-price guarantee – no surprise invoices',
            badge: 'Most popular',
            perMonth: 'one-time',
            noHidden: 'All prices excl. VAT · No recurring costs',
            faqTitle: 'Common pricing questions',
            faqs: [
                { q: 'Is there an upfront payment?', a: '50% on contract signing, 50% on acceptance. No 100% cash-out at once.' },
                { q: 'What\'s not included in the price?', a: 'Domain (approx. €1–2/month) and hosting (approx. €8–15/month) are not included – we recommend providers with German servers.' },
                { q: 'Can I make changes myself after go-live?', a: 'Yes. That\'s our promise. No dependency on us. Full control.' },
                { q: 'What does maintenance cost after launch?', a: 'Optional maintenance contract from €49/month (updates, backups, monitoring) – but no obligation.' },
            ],
        },

        faq: {
            label: 'Frequently asked questions',
            h2a: 'All answers –',
            h2b: 'no fine print',
            sub: 'The questions founders ask most often – answered honestly and directly.',
            notFound: 'Your question isn\'t here?',
            notFoundSub: 'Write to us directly – we reply in under 24 hours.',
            ctaBtn: 'Ask a question →',
        },

        blog: {
            label: 'Insights for smart founders',
            h2: 'Our Blog',
            sub: 'Practical knowledge on web design, GDPR, conversion and tech – written by makers for founders.',
            allArticles: 'All articles',
            read: 'Read',
            newsletterTitle: 'No spam. Just knowledge that helps.',
            newsletterSub: '1 email per month with the best tips on web design, GDPR and conversion for founders. Unsubscribe anytime.',
            newsletterPlaceholder: 'your@email.com',
            newsletterBtn: 'Subscribe →',
            newsletterNote: 'GDPR compliant · No third-party sharing · Unsubscribe anytime',
        },

        kontakt: {
            label: 'Free consultation',
            h2a: 'Ready for a website',
            h2b: 'that actually converts?',
            sub: 'No sales pressure. A real strategic conversation – even if you decide against us, you\'ll leave with concrete insights.',
            directTitle: 'Reach us directly',
            contactItems: [
                { label: 'Email', value: 'hello@webcraft-studio.de' },
                { label: 'Phone', value: '+49 151 234 567 89' },
                { label: 'Location', value: 'Remote & Germany-wide' },
                { label: 'Response time', value: '< 24 hours (guaranteed)' },
            ],
            promiseTitle: 'Our promise to you',
            promises: ['Reply in under 24 hours', 'No sales pressure – honest assessment', 'Free 30-min. strategy call', 'Non-binding fixed-price quote'],
            fields: {
                name: 'Name', namePh: 'Jane Doe',
                email: 'Email', emailPh: 'jane@startup.com',
                firma: 'Company / Start-up', firmaPh: 'TechStart GmbH',
                telefon: 'Phone (optional)', telefonPh: '+49 151 234 567',
                leistung: 'Service needed *', leistungPh: 'Please select ...',
                budget: 'Your budget (optional)', budgetPh: 'Please select ...',
                nachricht: 'Describe your project briefly *', nachrichtPh: 'What do you do, who is your audience, what do you need?',
                dsgvo: 'I agree that my data will be stored and processed to handle my enquiry. Data will not be shared with third parties.',
                dsgvoLink: 'Privacy policy',
                submit: 'Request free consultation',
                submitting: 'Sending ...',
                note: '* Required fields · No spam · Reply within 24h',
            },
            budgets: ['Under €2,500', '€2,500 – €5,000', '€5,000 – €10,000', 'Over €10,000', 'Not sure yet'],
            leistungen: ['Create new website', 'Redesign existing website', 'Landing page (single-page)', 'E-commerce / online shop', 'SEO optimization', 'Other'],
            errors: { name: 'Please enter your name.', email: 'Please enter a valid email address.', leistung: 'Please select a service.', nachricht: 'Please briefly describe your project.', dsgvo: 'Please agree to the privacy policy.' },
            successTitle: 'Your enquiry has been received! 🎉',
            successSub: 'We\'ll get back to you within 24 hours – guaranteed no ghosting.',
            successSteps: ['We review your enquiry', 'We suggest 3 free call slots', 'You receive a written strategy briefing'],
            successTitle2: 'What happens next:',
        },

        cookie: {
            title: 'Cookie Settings',
            close: 'Close (necessary only)',
            desc: 'This website uses cookies to provide you with the best possible experience.',
            privacyLink: 'Privacy policy',
            acceptAll: 'Accept all',
            necessary: 'Necessary cookies only',
            save: 'Save preferences',
            details: 'Customize cookie settings',
            hideDetails: 'Hide details',
            categories: [
                { label: 'Necessary cookies', desc: 'Required for basic website functionality. Always active.' },
                { label: 'Analytics cookies', desc: 'Help us understand how visitors use the website (anonymized).' },
                { label: 'Marketing cookies', desc: 'For personalized ads on third-party platforms.' },
            ],
            gdprNote: 'GDPR compliant · No third-party sharing · Unsubscribe anytime',
        },

        footer: {
            tagline: 'High-converting, legally secure websites for founders and start-ups in Germany. No ghosting. No lock-in. No BS.',
            services: 'Services',
            company: 'Company',
            legal: 'Legal',
            servicesItems: ['Web design for start-ups', 'Landing pages', 'SEO optimization', 'GDPR consulting', 'CMS setup', 'Website redesign'],
            companyItems: [{ label: 'About us', href: '#' }, { label: 'Work', href: '#referenzen' }, { label: 'Pricing', href: '#preise' }, { label: 'Process', href: '#prozess' }, { label: 'Blog', href: '#blog' }, { label: 'Contact', href: '#kontakt' }],
            legalItems: [{ label: 'Legal notice', href: '#impressum' }, { label: 'Privacy policy', href: '#datenschutz' }, { label: 'Terms', href: '#agb' }, { label: 'Cookie settings', href: '#cookies' }],
            gdprBadge: '🔒 GDPR compliant',
            gdprNote: 'Servers in Germany. No data sharing with third parties.',
            copy: 'WebCraft Studio – Web design for founders & start-ups. All rights reserved.',
            madeIn: 'Built with ❤️ in Germany · 🌱 CO₂-neutral hosting',
        },
    },
}

export default t
