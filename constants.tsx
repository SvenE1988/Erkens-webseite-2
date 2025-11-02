
import React from 'react';
import { Project, CaseStudy } from './types';

export const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const LeadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.228a4.5 4.5 0 0 0-1.879-1.879m12.17-2.178a3 3 0 0 0-4.132-3.132m-3.839 5.251a7.5 7.5 0 0 0-4.132-3.132m9.423 7.423c.044.02.085.042.126.062m-9.547-7.484c.381.096.75.24 1.1.42m-1.1-.42a.5.5 0 0 0-.583-.583m1.166 0a4.5 4.5 0 0 1 1.879 1.879m-1.879-1.879a4.5 4.5 0 0 0-1.879 1.879m1.879-1.879a.5.5 0 0 1 .583.583m-1.166 0a7.5 7.5 0 0 1 4.132 3.132M3.279 9.32a9.094 9.094 0 0 1 3.741-.479 3 3 0 0 1 4.682 2.72m-7.5 2.228a4.5 4.5 0 0 1 1.879 1.879m-12.17 2.178a3 3 0 0 1 4.132 3.132m3.839-5.251a7.5 7.5 0 0 1 4.132 3.132m-9.423-7.423c-.044-.02-.085-.042-.126-.062m9.547 7.484c-.381-.096-.75-.24-1.1-.42m1.1.42a.5.5 0 0 1 .583.583m-1.166 0a4.5 4.5 0 0 0 1.879-1.879m-1.879 1.879a4.5 4.5 0 0 1-1.879-1.879m-1.879 1.879a.5.5 0 0 0 .583.583m1.166 0a7.5 7.5 0 0 0-4.132-3.132" />
    </svg>
);


export const ProcessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const KnowledgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);


export const projectsData: Project[] = [
    {
        category: "LEAD & DATEN-INTELLIGENZ",
        title: "GOOGLE MAPS/SOLAR API SCRAPER FÜR GEWERBE-DACHPACHT",
        description: "Nutzung der Google Maps und Solar API zur geobasierten KI-Analyse und direkten Lead-Generierung, wodurch die manuelle Suche nach idealen Zielobjekten entfällt und die Lead-Qualität steigt.",
        roi: 4,
        userFriendliness: 5,
        coreTech: "Google Solar/Places API, n8n",
        problemSolution: "Manuelle, zeitaufwändige Suche nach idealen Dächern. Geo-basierte Analyse rund um Umspannwerk, Filtern Gewerbedächer + Berechnung der PV-Module auf dem Gewerbedacht → Next: Generierung von personalisierter Angebotsmappe.",
        measurableValue: "Erhöhte Lead-Qualität. Direkte Erstellung von Angebotsgrundlagen.",
        techDifficulty: 3,
        isExtra: true
    },
    {
        category: "LEAD & DATEN-INTELLIGENZ",
        title: "RESEARCH: SALES PLAYBOOK & OUTREACH-PERSONALISIERUNG",
        description: "Generierung personalisierter Playbooks, Email-Nachrichten und Terminvorbereitung mithilfe kontextbezogener KI-Analyse, um generische Kaltakquise zu vermeiden und die Antwortraten signifikant zu erhöhen.",
        roi: 5,
        userFriendliness: 4,
        coreTech: "Kontextbezogene LLM-Analyse, Data Scraper, CRM",
        problemSolution: "Generische Cold-E-Mails führen zu geringen Antwortraten. Generierung tief personalisierter Salesplays.",
        measurableValue: "Signifikante Steigerung der Antwortraten. Erhöhte Relevanz in der Terminvorbereitung.",
        techDifficulty: 4
    },
    {
        category: "LEAD & DATEN-INTELLIGENZ",
        title: "WÖCHENTLICHE KI-WETTBEWERBERANALYSE",
        description: "Dieses Projekt automatisiert die Wettbewerbsrecherche durch Scannen und Kl-gestützte Zusammenfassung von relevanten Informationen, um dem Vertrieb zeitnah und konsistent Einblicke zu liefern.",
        roi: 4,
        userFriendliness: 3,
        coreTech: "n8n, Perplexity Search API, AI-Summarization",
        problemSolution: "Zeitintensive, inkonsistente Wettbewerbsrecherche. Automatisches Scannen und Kl-gestützte Zusammenfassung.",
        measurableValue: "100% pünztlicher Report. Vertrieb sofort informiert.",
        techDifficulty: 2
    },
    {
        category: "LEAD & DATEN-INTELLIGENZ",
        title: "OUTBOUND-ANRUF SPRACHAGENT",
        description: "Dieses Projekt aus Q4-2024 hat 6000 gekauft Photovoltaik-Leads nachqualifiziert versucht Interesse an Photovoltaik oder Wärmepumpe abzufragen. Herausforderung: Leads waren teilweise 2 Jahre alt - Call-Center sehr teuer.",
        roi: 4,
        userFriendliness: 3,
        coreTech: "make.com, RetellAI, OpenAI, Bitrix CRM",
        problemSolution: "Echtes Call-Center ist sehr teuer und Zeitintensiv. Sprachagent - führt 20 Gespräche gleichzeitig, Behandelt Einwände und legt direkt Termine in den Kalender.",
        measurableValue: "3400/6000 Leads erreicht - ca. 1100 Leads in 40 Minuten abtelefoniert - Gesamt 214 Interessenten für PV & 46 Interessen für WP reaktiviert.",
        techDifficulty: 5
    },
    {
        category: "VERTRIEBS-OPS & SALES ENABLEMENT",
        title: "AUTOMATISIERTE ANGEBOTS- & VERTRAGSAUSFÜLLHILFE (PDF)",
        description: "Dieses Projekt zielte darauf ab, die Fleißarbeit der Angebotserstellung (14h p. Woche) und Vertragsausfüllung zu automatisieren, um manuelle Fehler zu reduzieren und die Effizienz zu steigern.",
        roi: 5,
        userFriendliness: 5,
        coreTech: "make.com, sevdesk API, Bitrix API",
        problemSolution: "Doppelte Dateneingabe in Verträgen/Anträgen. Automatisierte Generierung und Vorausfüllung von PDFs. Onlineangebotsrechner für Kunden.",
        measurableValue: "von 14h auf 1h p. Woche. Nur noch Sonderangebote mussten erstellt werden.",
        techDifficulty: 3
    },
    {
        category: "VERTRIEBS-OPS & SALES ENABLEMENT",
        title: "KONTEXTBASIERTE MEETING-ANALYSE (KI)",
        description: "Dieses Projekt nutzt Kl, um Meetings nicht nur zusammenzufassen, sondern relevante, kontextbezogene Insights und Feedback für den Vertrieb zu extrahieren.",
        roi: 4,
        userFriendliness: 4,
        coreTech: "Gemini API, Hubspot API, n8n",
        problemSolution: "Standard-Zusammenfassungen sind nicht kontextbasiert. Post-Meeting-Analyse zur Extraktion relevanter Infos und Feedback. Datenpunktaufbereitung für CRM. Generierung von handlungsrelevanten Insights.",
        measurableValue: "Hohe Akzeptanz im Vertriebsteam. Meeting-analysen bauen aufeinander auf bei Folgegesprächen.",
        techDifficulty: 3
    },
    {
        category: "VERTRIEBS-OPS & SALES ENABLEMENT",
        title: "AUFBAU NEUES CRM FÜR CALL CENTER",
        description: "Grundlegender Neuaufbau des CRM und erstellen der CRM-Workflows für ein Callcenter mit 2 Personen und 8 unterschiedlichen Telefonnummern.",
        roi: 4,
        userFriendliness: 5,
        coreTech: "GoHighLevel, Twilio, Leadconnector API, KI Anrufbeantworter",
        problemSolution: "Setter mussten manuelle Excel Pipelines pflegen und Rückrufe wurden nicht erfasst. Zentrale Telefonnummer und zentraler Steuerung alle Anrufe, automatisches Tracking im CRM und einstellen von Terminen.",
        measurableValue: "Zentrale Verfolgung aller Aktivitäten. Kein Lead wird verpasst.",
        techDifficulty: 2
    },
    {
        category: "VERTRIEBS-OPS & SALES ENABLEMENT",
        title: "KI-ONBOARDING & SALES-TRAINING AGENT",
        description: "Entwicklung eines KI-Agenten zur Unterstützung beim Onboarding neuer Mitarbeiter und zur Bereitstellung konsistenter Sales-Trainings durch virtuelle Rollenspiele.",
        roi: 4,
        userFriendliness: 5,
        coreTech: "Trainierter Custom LLM-Agent, Rollenspiel-Engine",
        problemSolution: "Hoher manueller Aufwand beim Onboarding und Coaching. Agent für Produkt-Wissen und virtuelle Rollenspiele.",
        measurableValue: "Verkürzung der Einarbeitungszeit. Konsistente Verbesserung der Pitch-Qualität.",
        techDifficulty: 4
    },
    {
        category: "WISSEN & KI-INFRASTRUKTUR",
        title: "MULTI-AGENTEN-ASSISTENZ (MCP) ÜBER CHAT",
        description: "Aufbau einer zentralen Multi-Agenten-Assistenz über ein Chat-Interface & MCP-Schnittstelle, das verschiedene LLM-Agenten steuert, um Notizen und administrative Aufgaben an einem Single-Point-of-Entry zu verwalten.",
        roi: 4,
        userFriendliness: 4,
        coreTech: "LLM-Agenten-Orchestrierung, n8n, Retell API, CRM-API",
        problemSolution: "Dezentrale Verwaltung von Notizen, Aufgaben. Zentrales Chat-Interface zur Steuerung von Agenten.",
        measurableValue: "Single-Point-of-Entry für administrative Aufgaben. Zeitersparnis.",
        techDifficulty: 5
    },
    {
        category: "WISSEN & KI-INFRASTRUKTUR",
        title: "INTERNE, DSGVO-KONFORME KI-WISSENSDATENBANK",
        description: "Errichtung einer sicheren, internen Wissens-KI (DSGVO-konform) durch ein lokales LLM und eine Vektor-Datenbank, um dezentrales Wissen zu zentralisieren und interne Anfragen schneller zu beantworten.",
        roi: 4,
        userFriendliness: 4,
        coreTech: "Lokales LLM / Vektor-DB, Slack-Anbindung",
        problemSolution: "Dezentrales Wissen & Datensicherheitsbedenken. Aufbau einer sicheren, internen Wissens-Kl.",
        measurableValue: "100% DSGVO-Konformität. 30% schnellere interne Beantwortung.",
        techDifficulty: 4
    },
    {
        category: "PROZESS & BACK-OFFICE",
        title: "AUTOMATISIERTE BELEGVERARBEITUNG",
        description: "Implementierung einer vollautomatisierten, DSGVO-konformen Belegverarbeitung und Ablage mithilfe von OCR, um den hohen manuellen Aufwand in der Steuerbuchhaltung drastisch zu reduzieren.",
        roi: 5,
        userFriendliness: 3,
        coreTech: "Mistral OCR (Server), n8n, Google Drive API",
        problemSolution: "Hoher manueller Steuer-Aufwand. Vollautomatisierte, datenschutzkonforme Belegverarbeitung und Ablage.",
        measurableValue: "90% Reduktion des Aufwands. 100% korrekte Ablage.",
        techDifficulty: 3
    },
    {
        category: "PROZESS & BACK-OFFICE",
        title: "MULTI-PLATTFORM SOCIAL MEDIA CONTENT AUTOMATION",
        description: "Automatisierte Erstellung von Content-Plänen und Posts für Social Media durch trainierte KI (Brand Voice), wodurch die Marketingabteilung stark entlastet und eine höhere Präsenz erreicht wird.",
        roi: 4,
        userFriendliness: 4,
        coreTech: "n8n, Trainierte LLM (Brand Voice), CMS/Social Media API",
        problemSolution: "Hoher Aufwand in Recherche und Konsistenz. Automatisierte Entwurf Erstellung von Content-Plänen und Posts.",
        measurableValue: "80% Entlastung der Marketingabteilung. Erhöhte Präsenz.",
        techDifficulty: 3
    },
    {
        category: "PROZESS & BACK-OFFICE",
        title: "BEWERBERMANAGEMENT-AGENT (ANONYMISIERUNG)",
        description: "Ein Bewerbermanagement-Agent nutzt ein lokales LLM zur Anonymisierung und automatischen Vorsortierung von Bewerbungen, um das Bias-Risiko zu reduzieren und den Recruiting-Prozess zu beschleunigen.",
        roi: 4,
        userFriendliness: 4,
        coreTech: "Lokales anonymisierendes LLM, n8n, Google Drive API",
        problemSolution: "Hoher manueller Aufwand und Bias-Risiko. Anonymisierung und automatische Vorsortierung.",
        measurableValue: "Beschleunigung des Recruiting-Prozesses. Reduktion des Bias-Risikos.",
        techDifficulty: 3
    }
];

export const skillsData = {
    tools: ["n8n/make.com", "Retell AI / Vapi", "Cursor / VS Code"],
    apis: ["Gemini API", "Perplexity Search API", "Hubspot API"],
    crms: ["HubSpot", "GoHighLevel", "Bitrix24"],
    competencies: ["NoCode - Prozessarchitektur", "Projektmanagement"]
};

export const caseStudiesData: CaseStudy[] = [
    {
        date: "Sep 2024",
        company: "Purainvest",
        logoUrl: "https://placehold.co/120x50/e5e5de/333333?text=Purainvest",
        title: "Dynamische Chatbots für eine bessere Kundeninteraktion",
        description: "Wie dynamische Chatbots Kundenerlebnisse optimieren und interne Prozesse effizienter gestalten. Ein Erfolgsbeispiel von Purainvest."
    },
    {
        date: "Nov 2024",
        company: "Purainvest",
        logoUrl: "https://placehold.co/120x50/e5e5de/333333?text=Purainvest",
        title: "Integration von Beraterrechnern für effiziente Immobilienfinanzierung",
        description: "Automatisierte Kundenrechner erleichtern Prozesse und steigern die Zufriedenheit bei der Immobilienfinanzierung. Purainvest-Fallstudie."
    },
    {
        date: "Jan 2025",
        company: "Wesa Solar",
        logoUrl: "https://placehold.co/120x50/e5e5de/333333?text=Wesa+Solar",
        title: "Automatisierte Angebotserstellung mit SEVDESK",
        description: "Erfahre, wie Automatisierung administrative Prozesse beschleunigt und Vertriebseffizienz steigert. Wesa-Solar reduzierte den Prozess von 48 Stunden auf wenige Minuten."
    },
    {
        date: "Feb 2025",
        company: "Wesa Solar",
        logoUrl: "https://placehold.co/120x50/e5e5de/333333?text=Wesa+Solar",
        title: "Voice-Agenten im Vertrieb: Automatische Qualifizierung",
        description: "Automatisierte Sprachassistenten als Schlüssel zur Effizienzsteigerung im Vertrieb kleiner und mittlerer Unternehmen. Ein Erfolgsbeispiel von Wesa-Solar."
    }
];