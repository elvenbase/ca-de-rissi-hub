# Guida al Deployment e CI/CD

Questo documento spiega come configurare e utilizzare il sistema CI/CD per il progetto ca-de-rissi-hub.

## Configurazione GitHub

### 1. Repository Setup
- Assicurati che il repository sia su GitHub
- Verifica che i branch principali siano: `main`, `develop`, `staging`

### 2. GitHub Secrets
Vai su `Settings > Secrets and variables > Actions` e aggiungi:

- `NETLIFY_AUTH_TOKEN`: Token di autenticazione Netlify
- `NETLIFY_SITE_ID`: ID del sito Netlify

#### Come ottenere i secrets:

**NETLIFY_AUTH_TOKEN:**
1. Vai su [Netlify User Settings](https://app.netlify.com/user/settings/tokens)
2. Clicca "New access token"
3. Dai un nome al token (es. "GitHub Actions")
4. Copia il token generato

**NETLIFY_SITE_ID:**
1. Vai su [Netlify Sites](https://app.netlify.com/sites)
2. Seleziona il tuo sito
3. Vai su "Site settings > General"
4. Copia il "Site ID"

## Configurazione Netlify

### 1. Creazione Sito
1. Vai su [Netlify](https://app.netlify.com/)
2. Clicca "New site from Git"
3. Connetti il repository GitHub
4. Configura:
   - Build command: `npm run build:netlify`
   - Publish directory: `dist`
   - Base directory: (lascia vuoto)

### 2. Impostazioni Build
- Node version: 18
- Build command: `npm run build:netlify`
- Publish directory: `dist`

## Workflow CI/CD

### Branch Strategy
- `main`: Deploy automatico in produzione
- `develop`: Deploy automatico in staging
- `staging`: Deploy automatico in staging
- Altri branch: Deploy preview per PR

### Trigger
- **Push** su branch principali → Build + Deploy
- **Pull Request** → Build + Deploy Preview
- **Merge** su main → Deploy in produzione

### Jobs
1. **build-and-test**: Build, lint, test
2. **deploy-to-netlify**: Deploy in produzione (solo main)
3. **deploy-preview**: Deploy preview (PR e feature branch)

## Comandi Utili

### Local Development
```bash
npm run dev          # Avvia server di sviluppo
npm run build        # Build locale
npm run preview      # Preview build locale
```

### Quality Checks
```bash
npm run lint         # Esegue linting
npm run lint:fix     # Corregge errori di linting
npm run type-check   # Verifica tipi TypeScript
npm run test:build   # Lint + Type check + Build
```

### Build per Deployment
```bash
npm run build:main      # Build per produzione
npm run build:develop   # Build per develop
npm run build:staging   # Build per staging
npm run build:feature   # Build per feature branch
npm run build:netlify   # Build ottimizzato per Netlify
```

## Troubleshooting

### Build Fallisce
1. Controlla i log GitHub Actions
2. Verifica che tutti i secrets siano configurati
3. Controlla che il comando build funzioni localmente

### Deploy Non Funziona
1. Verifica i secrets Netlify
2. Controlla che il sito sia configurato correttamente
3. Verifica i log di deploy su Netlify

### Problemi di Cache
1. Netlify gestisce automaticamente il cache
2. Per forzare un rebuild, fai un commit vuoto
3. Usa `npm run build:netlify` per build ottimizzati

## Monitoraggio

### GitHub Actions
- Vai su `Actions` nel repository
- Monitora i workflow in esecuzione
- Controlla i log per errori

### Netlify
- Dashboard: [app.netlify.com](https://app.netlify.com)
- Log di deploy: Site > Deploys
- Analytics: Site > Analytics

## Sicurezza

- I secrets sono crittografati
- Solo collaboratori con accesso possono vedere i secrets
- I token Netlify hanno permessi limitati
- RLS (Row Level Security) è abilitato su Supabase

## Supporto

Per problemi o domande:
1. Controlla i log GitHub Actions
2. Verifica la configurazione Netlify
3. Controlla questo documento
4. Apri un issue nel repository
