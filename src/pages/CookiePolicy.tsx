import { Box, Container, Typography } from "@mui/material";

const sections = [
  {
    id: "definizione",
    title: "1. Cosa sono i cookie",
    paragraphs: [
      "I cookie sono piccoli file di testo che i siti web visitati dall’utente inviano al dispositivo utilizzato per la navigazione, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.",
      "I cookie consentono al sito di funzionare correttamente, ricordare preferenze e impostazioni, raccogliere informazioni statistiche e, in alcuni casi, migliorare i contenuti e i servizi offerti all’utente.",
    ],
  },
  {
    id: "tipologie",
    title: "2. Tipologie di cookie utilizzati",
    paragraphs: [
      "Il sito può utilizzare cookie tecnici necessari al suo funzionamento e, previo consenso dell’utente quando richiesto, cookie analitici o cookie di terze parti.",
      "I cookie tecnici sono indispensabili per garantire la navigazione, la sicurezza e il corretto utilizzo delle funzionalità essenziali del sito.",
      "I cookie analitici permettono di raccogliere informazioni aggregate o, ove applicabile, statistiche utili a comprendere come il sito viene utilizzato, così da migliorarne struttura, contenuti ed esperienza di navigazione.",
    ],
  },
  {
    id: "tecnici",
    title: "3. Cookie tecnici",
    paragraphs: [
      "I cookie tecnici sono utilizzati esclusivamente per consentire il corretto funzionamento del sito e per permettere all’utente una navigazione efficace e coerente.",
      "Questi cookie non richiedono il consenso preventivo dell’utente, in quanto strettamente necessari all’erogazione del servizio richiesto.",
    ],
  },
  {
    id: "analitici",
    title: "4. Cookie analitici",
    paragraphs: [
      "Il sito può utilizzare cookie analitici per raccogliere informazioni statistiche sull’uso delle pagine, sul comportamento di navigazione e sulle performance del sito.",
      "Quando tali strumenti non rientrano tra quelli equiparabili ai cookie tecnici, il loro utilizzo avviene solo previo consenso dell’utente espresso tramite apposito banner o sistema di gestione delle preferenze.",
    ],
  },
  {
    id: "terze-parti",
    title: "5. Cookie di terze parti",
    paragraphs: [
      "Il sito può integrare contenuti, funzionalità o servizi forniti da soggetti terzi. In tali casi, i fornitori terzi potrebbero installare cookie propri attraverso il sito.",
      "Per maggiori informazioni sulle modalità di trattamento dei dati da parte di tali soggetti, l’utente è invitato a consultare le rispettive informative privacy e cookie policy.",
    ],
  },
  {
    id: "consenso",
    title: "6. Gestione del consenso",
    paragraphs: [
      "Al primo accesso al sito, l’utente può accettare, rifiutare oppure personalizzare l’utilizzo dei cookie non necessari attraverso il banner o il sistema di gestione del consenso eventualmente presente.",
      "L’utente può successivamente modificare le proprie preferenze o revocare il consenso già prestato secondo le modalità rese disponibili dal sito.",
    ],
  },
  {
    id: "browser",
    title: "7. Gestione dei cookie dal browser",
    paragraphs: [
      "L’utente può in ogni momento gestire, limitare o disabilitare i cookie direttamente tramite le impostazioni del proprio browser.",
      "La disattivazione dei cookie tecnici potrebbe tuttavia compromettere il corretto funzionamento di alcune sezioni o funzionalità del sito.",
    ],
  },
  {
    id: "titolare",
    title: "8. Titolare del trattamento",
    paragraphs: [
      "Per qualsiasi informazione relativa al trattamento dei dati personali e all’utilizzo dei cookie, l’utente può fare riferimento al Titolare del trattamento indicato nella Privacy Policy o nella sezione contatti del sito.",
      "Qualora necessario, questa sezione può essere integrata con i dati completi del titolare, l’indirizzo email di contatto e gli ulteriori recapiti utili.",
    ],
  },
  {
    id: "aggiornamenti",
    title: "9. Aggiornamenti della presente policy",
    paragraphs: [
      "La presente Cookie Policy può essere soggetta a modifiche, aggiornamenti o integrazioni nel tempo, anche in relazione a cambiamenti normativi, tecnici o organizzativi.",
      "Gli utenti sono invitati a consultare periodicamente questa pagina per verificare la versione più aggiornata.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <Box className="min-h-screen bg-[#04030a] text-white">
      <Container maxWidth="lg" className="px-5 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-10 border-b border-white/10 pb-6 sm:mb-12">
            <div className="mb-4 h-[2px] w-10 bg-[#ff1e1e]" />

            <Typography
              sx={{
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "#f5f5f7",
              }}
            >
              Cookie Policy
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: "760px",
                fontSize: { xs: "0.96rem", sm: "1rem" },
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.58)",
              }}
            >
              Questa informativa descrive in modo chiaro e trasparente le modalità
              di utilizzo dei cookie all’interno del sito, le tipologie
              eventualmente impiegate e le opzioni a disposizione dell’utente per
              gestire o modificare le proprie preferenze.
            </Typography>

            <Typography
              sx={{
                mt: 3,
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Ultimo aggiornamento — [inserire data]
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
            {/* Sidebar */}
            <div className="h-fit rounded-[18px] border border-white/10 bg-white/[0.02] p-5 lg:sticky lg:top-24">
              <Typography
                sx={{
                  fontSize: "0.74rem",
                  color: "#ff5a5a",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Indice
              </Typography>

              <div className="mt-4 space-y-2.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-b border-white/5 pb-2 text-sm text-white/55 transition hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Intro box */}
              <div className="mb-5 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 sm:p-6">
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#ff5a5a",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Informativa sintetica
                </Typography>

                <Typography
                  sx={{
                    mt: 1.4,
                    fontSize: "0.95rem",
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Utilizziamo cookie tecnici necessari al corretto funzionamento
                  del sito e, ove previsto, cookie analitici o di terze parti
                  esclusivamente nei limiti consentiti e secondo le preferenze
                  espresse dall’utente.
                </Typography>
              </div>

              {/* Sections */}
              <div className="space-y-4">
                {sections.map((section) => (
                  <section
                    id={section.id}
                    key={section.id}
                    className="rounded-[18px] border border-white/10 bg-[#0a0911] p-5 sm:p-6"
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.05rem", sm: "1.14rem" },
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "#f5f5f7",
                      }}
                    >
                      {section.title}
                    </Typography>

                    <div className="mt-3 space-y-3">
                      {section.paragraphs.map((paragraph, index) => (
                        <Typography
                          key={index}
                          sx={{
                            fontSize: { xs: "0.92rem", sm: "0.96rem" },
                            lineHeight: 1.9,
                            color: "rgba(255,255,255,0.62)",
                          }}
                        >
                          {paragraph}
                        </Typography>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Bottom cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5">
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#ff5a5a",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    Contatti
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      fontSize: "0.92rem",
                      lineHeight: 1.85,
                      color: "rgba(255,255,255,0.66)",
                    }}
                  >
                    Per ulteriori informazioni sull’utilizzo dei cookie o sul
                    trattamento dei dati personali, è possibile consultare la
                    Privacy Policy oppure contattare il titolare tramite i recapiti
                    indicati sul sito.
                  </Typography>
                </div>

                <div className="rounded-[18px] border border-white/10 bg-white/[0.02] p-5">
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "#ff5a5a",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    Nota
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      fontSize: "0.92rem",
                      lineHeight: 1.85,
                      color: "rgba(255,255,255,0.66)",
                    }}
                  >
                    Prima della pubblicazione, sostituisci i placeholder con la
                    data di aggiornamento corretta e aggiungi eventuali riferimenti
                    specifici agli strumenti di analisi o ai servizi di terze parti
                    effettivamente utilizzati.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}