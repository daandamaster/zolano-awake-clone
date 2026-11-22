"use client";

import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { num: "01", title: "Zonnepanelen", desc: "Stroom van het dak. Slim gekoppeld aan batterij of warmtepomp." },
    { num: "02", title: "Warmtepompen", desc: "Gasloos of hybride. Comfort met toekomstwaarde. ISDE mogelijk." },
    { num: "03", title: "Airco’s", desc: "Fluisterstil design. Koelen én verwarmen." },
    { num: "04", title: "Laadpalen", desc: "Veilig laden volgens NEN 1010. Thuis of zakelijk." },
    { num: "05", title: "Thuisbatterijen", desc: "Overschot opslaan. Slim op dynamische tarieven." },
    { num: "06", title: "CV-ketels", desc: "Betrouwbaar vervangen of onderhouden." },
  ];

  const process = [
    { num: "01", title: "Aanvraag", desc: "Binnen 24 uur contact. WhatsApp, bel of formulier." },
    { num: "02", title: "Advies op locatie", desc: "We kijken wat écht past bij jouw woning." },
    { num: "03", title: "Heldere offerte", desc: "Overzichtelijk en inclusief planning." },
    { num: "04", title: "Installatie", desc: "Netjes door eigen gecertificeerde monteurs." },
    { num: "05", title: "Oplevering", desc: "Getest, uitgelegd, brandschoon achtergelaten." },
  ];

  const faqs = [
    { q: "Hoe snel plannen jullie in?", a: "Na akkoord zo snel mogelijk. Cv-ketel vaak binnen enkele dagen. Warmtepomp, airco of batterij afhankelijk van levertijd. Altijd duidelijke planning vooraf." },
    { q: "Hoe lang duurt de installatie?", a: "Cv-ketel of laadpaal: meestal één dag. Airco of batterij: halve tot hele dag. Warmtepomp: één tot drie dagen." },
    { q: "Subsidie mogelijk?", a: "Warmtepompen vaak ISDE. Wij helpen met de check en aanvraag. Andere diensten meestal geen landelijke subsidie." },
    { q: "Zijn jullie gecertificeerd?", a: "Ja. VCA**, STEK, F-gassen, ISSO-richtlijnen en NEN 1010." },
    { q: "Combinaties mogelijk?", a: "Zeker. Alles onder één dak, één aanspreekpunt, één planning." },
    { q: "Offerte vrijblijvend?", a: "Ja. Geen verplichtingen, geen verborgen kosten." },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">Zolano</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#diensten" className="hover:text-stone-900 transition">Diensten</a>
            <a href="#waarom" className="hover:text-stone-900 transition">Waarom</a>
            <a href="#werkwijze" className="hover:text-stone-900 transition">Werkwijze</a>
            <a href="#contact" className="hover:text-stone-900 transition">Contact</a>
          </div>
          <a href="#contact" className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition">
            Offerte aanvragen
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.95] tracking-tight">
            Uw woning.
            <br />
            <span className="italic text-emerald-600">Slimmer energie.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Van zonnepanelen en warmtepompen tot laadpalen, airco’s en thuisbatterijen.<br />
            Eén team. Van advies tot schone oplevering.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20">
              Vrijblijvende offerte
            </a>
            <a href="tel:0624937635" className="border border-stone-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-stone-100 transition">
              Bel 06 24937635
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest uppercase text-stone-500 font-medium">
            VCA** · STEK · F-gassen · ISSO · NEN 1010 · Actief in heel Nederland
          </p>
        </div>
      </section>

      <section id="diensten" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Alles voor een slimmer huis.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.num} className="group bg-white border border-stone-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                <div className="text-emerald-600 font-mono text-sm mb-4">{s.num}</div>
                <h3 className="text-2xl font-medium mb-3">{s.title}</h3>
                <p className="text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waarom" className="py-24 bg-stone-900 text-stone-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Complexe techniek, helder geregeld.</h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Nuchter advies dat bij de woning past. Eigen gecertificeerde monteurs. Geen onderaannemers. Geen verborgen kosten. Eén aanspreekpunt van aanvraag tot oplevering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div><div className="text-5xl font-serif">4</div><div className="text-stone-400 mt-2">Certificeringen</div></div>
            <div><div className="text-5xl font-serif">12</div><div className="text-stone-400 mt-2">Provincies</div></div>
            <div><div className="text-5xl font-serif">24u</div><div className="text-stone-400 mt-2">Reactie</div></div>
            <div><div className="text-5xl font-serif">1</div><div className="text-stone-400 mt-2">Aanspreekpunt</div></div>
          </div>
        </div>
      </section>

      <section id="werkwijze" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Van aanvraag tot oplevering.</h2>
          <div className="space-y-8">
            {process.map((step) => (
              <div key={step.num} className="flex gap-8 items-start group">
                <div className="text-3xl font-serif text-emerald-600 w-16 shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
                  <p className="text-stone-600 text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Goed om te weten.</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 font-medium flex justify-between items-center"
                >
                  {faq.q}
                  <span className="text-2xl text-stone-400">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-stone-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Klaar voor een slimmer huis?</h2>
          <p className="text-xl text-stone-600 mb-10">Bel 06 24937635 of vraag een vrijblijvende offerte aan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/31624937635" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-emerald-700 transition">
              WhatsApp
            </a>
            <a href="mailto:info@zolanoinstallaties.nl" className="border border-stone-300 px-8 py-4 rounded-full font-medium text-lg hover:bg-stone-100 transition">
              info@zolanoinstallaties.nl
            </a>
          </div>
          <p className="mt-8 text-sm text-stone-500">Ma – Za 08:00 – 18:00 · KvK 95573143</p>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-12 px-6 text-center text-sm text-stone-500">
        <p>© 2026 Zolano Installaties. Alle rechten voorbehouden.</p>
        <p className="mt-2">VCA** · STEK · F-gassen · ISSO · Vanuit Arnhem actief in heel Nederland.</p>
      </footer>
    </div>
  );
}