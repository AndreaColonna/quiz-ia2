const originalQuestions = [
    {
        question: "Quali sono i principali vantaggi dell’utilizzo dell’Intelligenza Artificiale nelle piattaforme di e-commerce?",
        options: [
            "Aumentare la velocità di consegna",
            "Maggiore affidabilità dei server",
            "Maggiore sicurezza dei dati degli utenti",
            "Migliore personalizzazione dell’offerta"
        ],
        correctAnswer: "Migliore personalizzazione dell’offerta"
    },
    {
        question: "Quando fu introdotto il termine “Intelligenza Artificiale”? ",
        options: ["2001", "1970", "1956", "1940"],
        correctAnswer: "1956"
    },
    {
        question: "In che anno il sistema IBM Watson vinse nel quiz televisivo Jeopardy?",
        options: ["1991", "2011", "2021", "1961"],
        correctAnswer: "2011"
    },
    {
        question: "Cosa caratterizza il Machine Learning?",
        options: [
            "Programmazione basata su linguaggio macchina",
            "Automazione di compiti manuali senza apprendimento",
            "Capacità di un sistema di apprendere dai dati e migliorare le prestazioni nel tempo",
            "Utilizzo di algoritmi di dominio"
        ],
        correctAnswer: "Capacità di un sistema di apprendere dai dati e migliorare le prestazioni nel tempo"
    },
    {
        question: "Qual è un esempio di applicazione di Machine Learning nella visione artificiale?",
        options: [
            "Calcolo della traiettoria di un proiettile",
            "Riconoscimento facciale",
            "Oculistica",
            "Analisi del suolo"
        ],
        correctAnswer: "Riconoscimento facciale"
    },
    {
        question: "In che modo il Deep Learning viene spesso utilizzato per migliorare l’esperienza degli utenti su piattaforme online?",
        options: [
            "Miglioramento canali di vendita",
            "Stampa 3D",
            "Raccomandazioni personalizzate di contenuti",
            "Scontistica"
        ],
        correctAnswer: "Raccomandazioni personalizzate di contenuti"
    },
    {
        question: "Qual è uno dei vantaggi del Deep Learning nell’ambito del riconoscimento del linguaggio naturale?",
        options: [
            "Costante supervisione umana",
            "Etichettatura manuale di ogni dato di addestramento",
            "Capacità di comprendere il contesto e la semantica delle frasi",
            "Nessun addestramento iniziale richiesto"
        ],
        correctAnswer: "Capacità di comprendere il contesto e la semantica delle frasi"
    },
    {
        question: "Qual è l’elemento chiave dei modelli Deep Learning?",
        options: [
            "Utilizzo della logica booleana",
            "Strutture di rete neurali profonde con più strati",
            "Preferenza per algoritmi di apprendimento supervisionato",
            "Dipendenza solo da dati di addestramento etichettati"
        ],
        correctAnswer: "Strutture di rete neurali profonde con più strati"
    },
    {
        question: "Quali sono i concetti tecnici specifici di base che generano componenti o modelli di Intelligenza Artificiale?",
        options: [
            "Algoritmi",
            "Euristiche",
            "Complessità",
            "Tutti e tre le risposte precedenti"
        ],
        correctAnswer: "Tutti e tre le risposte precedenti"
    },
    {
        question: "In quale settore l’uso del Machine Learning è comune per la raccomandazione di prodotti o contenuti personalizzati?",
        options: [
            "Nessuno di questi",
            "Agricoltura",
            "Medicina",
            "E-commerce"
        ],
        correctAnswer: "E-commerce"
    },
    {
        question: "Qual è uno dei principali vantaggi del Deep Learning rispetto ai metodi tradizionali di apprendimento automatico?",
        options: [
            "Nessun addestramento richiesto",
            "Maggiore certezza degli output",
            "Capacità di individuare automaticamente features rilevanti",
            "Maggiore interpretabilità"
        ],
        correctAnswer: "Capacità di individuare automaticamente features rilevanti"
    },
    {
        question: "Qual è l’obiettivo principale di un’euristica?",
        options: [
            "Risolvere solo problemi semplici",
            "Trovare sempre la soluzione ottimale",
            "Evitare completamente l’uso di algoritmi",
            "Fornire una soluzione approssimata in tempi rapidi"
        ],
        correctAnswer: "Fornire una soluzione approssimata in tempi rapidi"
    },
    {
        question: "Quale dei seguenti è un approccio generale che supporta comunemente l’Intelligenza Artificiale?",
        options: [
            "Semantica",
            "Euristica",
            "Epistemologia",
            "Olistica"
        ],
        correctAnswer: "Euristica"
    },
    {
        question: "Da cosa può dipendere la “complessità” nella Intelligenza Artificiale?",
        options: [
            "Dimensione e varietà dei dati",
            "Il tipo di dominio scelto",
            "Tempo di inserimento dei dati",
            "Il tipo di hardware utilizzato"
        ],
        correctAnswer: "Dimensione e varietà dei dati"
    },
    {
        question: "Un algoritmo è ….?",
        options: [
            "Un dispositivo hardware",
            "Un linguaggio di programmazione",
            "Una sequenza di passi ben definiti per risolvere un problema",
            "Un’astrazione matematica"
        ],
        correctAnswer: "Una sequenza di passi ben definiti per risolvere un problema"
    },
    {
        question: "Cosa è una rete neurale?",
        options: [
            "Un tipo di algoritmo di ordinamento",
            "Un programma di apprendimento automatico",
            "Un insieme di equazioni matematiche",
            "Un modello computazionale ispirato alla struttura e al funzionamento del cervello"
        ],
        correctAnswer: "Un modello computazionale ispirato alla struttura e al funzionamento del cervello"
    },
    {
        question: "Quando si applica la “regola del pollice” relativamente all’Intelligenza Artificiale?",
        options: [
            "Quando serve una risposta articolata e certa",
            "Quando la precisione della risposta è necessaria",
            "Quando la precisione completa non è necessaria e si desidera una soluzione rapida e praticabile",
            "Quando c’è la necessità di risolvere problemi semplici"
        ],
        correctAnswer: "Quando la precisione completa non è necessaria e si desidera una soluzione rapida e praticabile"
    },
    // Nuove domande
    {
        question: "L’analisi predittiva è un tipo di analisi che viene utilizzato per:",
        options: [
            "Prevedere i risultati futuri",
            "Descrivere i dati passati",
            "Comprendere le relazioni tra le variabili",
            "Analizzare solo i dati strutturati"
        ],
        correctAnswer: "Prevedere i risultati futuri"
    },
    {
        question: "Perché le organizzazioni integrano l’Intelligenza Artificiale nei processi aziendali?",
        options: [
            "Per eliminare la necessità di analisi dati",
            "Perché la gestione classica delle risorse umane è obsoleta",
            "Per aumentare le mansioni di controllo dati",
            "Per automatizzare compiti ripetitivi, migliorare l’efficienza e ridurre gli errori"
        ],
        correctAnswer: "Per automatizzare compiti ripetitivi, migliorare l’efficienza e ridurre gli errori"
    },
    {
        question: "Quale delle seguenti definizioni descrive meglio il Data Mining?",
        options: [
            "Il Data Mining è il processo di apprendimento automatico dai dati",
            "Il Data Mining è il processo di estrazione di informazioni significative da grandi quantità di dati",
            "Il Data Mining è il processo di utilizzo di tecniche statistiche per analizzare i dati",
            "Il Data Mining è il processo di identificazione di modelli e tendenze nascosti nei dati"
        ],
        correctAnswer: "Il Data Mining è il processo di identificazione di modelli e tendenze nascosti nei dati"
    },
    {
        question: "Quali sono alcuni dei modi in cui il linguaggio naturale generato dall’Intelligenza Artificiale viene utilizzato nella vita quotidiana?",
        options: [
            "Per creare contenuti creativi, come poesie, storie e canzoni",
            "Per rispondere a FAQ",
            "Per fare calcoli",
            "Per raccogliere dati"
        ],
        correctAnswer: "Per creare contenuti creativi, come poesie, storie e canzoni"
    },
    {
        question: "Quale delle seguenti è una funzione comune dei chatbot?",
        options: [
            "Intrattenere gli utenti",
            "Tutte le risposte sono corrette",
            "Fornire informazioni",
            "Gestire le richieste dei clienti"
        ],
        correctAnswer: "Tutte le risposte sono corrette"
    },
    {
        question: "L’Intelligenza Artificiale utilizza la ricerca semantica nei seguenti casi, tranne che:",
        options: [
            "Un chatbot che risponde alla domanda “Qual è il significato della vita?”",
            "Un assistente vocale che risponde alla domanda “Qual è la capitale della Francia?”",
            "Un motore di ricerca che fornisce risultati per la query “come fare la pizza”",
            "Un chatbot che risponde alla domanda “Dove si trova il negozio Adidas più vicino alla mia abitazione?”"
        ],
        correctAnswer: "Un chatbot che risponde alla domanda “Qual è il significato della vita?”"
    },
    {
        question: "Perché l’Intelligenza Artificiale è importante nella previsione e pianificazione aziendale?",
        options: [
            "Per prevedere trend futuri e anticipare potenziali sfide",
            "Per ridurre la necessità di piani strategici",
            "Per rendere la pianificazione aziendale più complessa",
            "Per contenere la quantità di informazioni disponibili"
        ],
        correctAnswer: "Per prevedere trend futuri e anticipare potenziali sfide"
    },
    {
        question: "Qual è il ruolo dell’Intelligenza Artificiale nel processo decisionale aziendale?",
        options: [
            "Sostituire completamente il ruolo umano nella presa di decisioni",
            "Aggiungere complessità",
            "Limitare la mole di informazioni",
            "Fornire analisi approfondite e raccomandazioni basate sui dati"
        ],
        correctAnswer: "Fornire analisi approfondite e raccomandazioni basate sui dati"
    },
    {
        question: "Qual è uno dei vantaggi principali dell’utilizzo dell’Intelligenza Artificiale nell’analisi dei dati?",
        options: [
            "Aumento del numero della forza lavoro",
            "Identificazione di pattern, correlazioni e informazioni rilevanti",
            "Aumento della quantità dei dati",
            "Miglioramento della qualità dei dati"
        ],
        correctAnswer: "Identificazione di pattern, correlazioni e informazioni rilevanti"
    },
    {
        question: "Cosa si intende per “Sentiment Analysis”?",
        options: [
            "Un metodo per analizzare la grammatica di un testo",
            "Un processo automatico e infallibile nell’identificazione dei sentimenti",
            "Un processo per determinare il sentimento o l’emozione associata a un testo",
            "Un algoritmo per generare testo automaticamente"
        ],
        correctAnswer: "Un processo per determinare il sentimento o l’emozione associata a un testo"
    },
    {
        question: "Qual è una caratteristica distintiva dei dati strutturati rispetto ai dati non strutturati?",
        options: [
            "I dati strutturati sono sempre più complessi da analizzare rispetto ai dati non strutturati",
            "Entrambi i tipi di dati sono organizzati in schemi ben definiti",
            "I dati strutturati contengono più informazioni dei dati non strutturati",
            "I dati strutturati sono organizzati in tabelle o relazioni con uno schema definito, mentre i dati non strutturati mancano di un formato specifico"
        ],
        correctAnswer: "I dati strutturati sono organizzati in tabelle o relazioni con uno schema definito, mentre i dati non strutturati mancano di un formato specifico"
    },
    {
        question: "In un sistema di riconoscimento vocale, quale processo è responsabile della conversione del segnale audio in testo?",
        options: [
            "Il processo di decodifica",
            "Il data mining",
            "Il processo di identificazione del parlatore",
            "Il processo di estrazione delle caratteristiche"
        ],
        correctAnswer: "Il processo di decodifica"
    },
    {
        question: "In che modo l’Intelligenza Artificiale contribuisce all’esperienza del cliente nelle organizzazioni orientate ai consumatori?",
        options: [
            "Personalizzando servizi e prodotti in base ai comportamenti e alle preferenze individuali",
            "Aumentando la fedeltà del cliente attraverso la standardizzazione dei prodotti",
            "Automatizzando completamente l’interazione con il cliente",
            "Riducendo la personalizzazione dei servizi"
        ],
        correctAnswer: "Personalizzando servizi e prodotti in base ai comportamenti e alle preferenze individuali"
    }
];
