# Ca De Rissi SG Esport - Sistema di Gestione Squadra

Sistema completo per la gestione di una squadra sportiva, con funzionalità per gestione giocatori, allenamenti, prove, competizioni e molto altro.

## 🚀 Caratteristiche

### 🏠 Dashboard
- Panoramica generale del club
- Statistiche giocatori attivi
- Allenamenti programmati
- Attività recenti

### 👥 Gestione Squad
- Gestione completa dei giocatori
- Stati: attivo, inattivo, infortunato, sospeso
- Numeri di maglia e posizioni
- Statistiche individuali

### 🏃 Sistema Prove (Trials)
- Gestione trialists con valutazioni
- Kanban board per il follow-up
- Punteggi: tecnico, fisico, tattico, atteggiamento

### 🏋️ Allenamenti
- Programmazione sessioni
- Gestione presenze
- Condivisione pubblica con QR code
- Sistema di registrazione online

### 🏆 Competizioni
- Gestione campionati e tornei
- Calendario partite
- Risultati e statistiche

### ⚽ Formazioni
- Builder formazioni tattiche
- Gestione lineup
- Visualizzazione schieramenti

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **State Management**: React Query
- **Routing**: React Router Dom
- **Form Management**: React Hook Form + Zod

## 📋 Prerequisiti

- Node.js 18+ e npm/yarn
- Account Supabase (per database e autenticazione)

## 🚀 Installazione e Setup

### 1. Clona il repository
```bash
git clone <YOUR_REPO_URL>
cd ca-de-rissi-sg-esport
```

### 2. Installa le dipendenze
```bash
npm install
```

### 3. Configura Supabase

#### Opzione A: Usa il database esistente
Il progetto è già configurato con un'istanza Supabase funzionante. Puoi usarla per testare l'applicazione.

#### Opzione B: Crea la tua istanza Supabase
1. Crea un nuovo progetto su [supabase.com](https://supabase.com)
2. Copia le credenziali del tuo progetto
3. Modifica `src/integrations/supabase/client.ts` con le tue credenziali:
```typescript
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_ANON_KEY";
```
4. Esegui le migrazioni del database dalla cartella `supabase/migrations/`

### 4. Avvia l'applicazione
```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:8080`

## 📁 Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
├── pages/              # Pagine dell'applicazione
├── contexts/           # Context providers (Auth, etc.)
├── hooks/              # Custom hooks
├── integrations/       # Configurazioni esterne (Supabase)
├── lib/               # Utilities e helpers
└── data/              # Dati statici

supabase/
├── migrations/        # Migrazioni database
└── functions/         # Edge functions
```

## 🔐 Sistema di Autenticazione

L'applicazione utilizza un sistema di ruoli:
- **Superadmin**: Accesso completo
- **Admin**: Gestione squadra e competizioni  
- **Coach**: Gestione allenamenti e valutazioni

## 📱 Funzionalità Avanzate

### Condivisione Pubblica
- Link pubblici per registrazione agli allenamenti
- QR code per accesso rapido
- Interfaccia mobile-friendly

### Real-time Updates
- Aggiornamenti in tempo reale
- Sincronizzazione automatica
- Gestione offline

## 🚀 Deployment

### Vercel (Consigliato)
1. Connetti il repository a Vercel
2. Configura le variabili d'ambiente se necessario
3. Deploy automatico

### Netlify
1. Connetti il repository a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Altri provider
Il progetto è compatibile con qualsiasi hosting che supporti applicazioni React statiche.

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push del branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## 📞 Supporto

Per supporto o domande, contatta il team di sviluppo.
