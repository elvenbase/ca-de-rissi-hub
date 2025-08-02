# 🚀 Guida al Deployment

Questa guida ti aiuterà a deployare l'applicazione **Ca De Rissi SG Esport** su diverse piattaforme.

## 📋 Prerequisiti per il Deployment

1. **Repository Git** pubblico o privato
2. **Account Supabase** (opzionale - puoi usare quello esistente)
3. **Account su una piattaforma di hosting**

## 🌐 Opzioni di Deployment

### 1. Vercel (Consigliato) ⭐

**Perché Vercel:**
- Deploy automatico da Git
- Edge functions
- Ottimizzazioni automatiche
- CDN globale
- SSL gratuito

**Passi:**
1. Vai su [vercel.com](https://vercel.com) e crea un account
2. Connetti il tuo repository GitHub/GitLab
3. Configura il progetto:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Aggiungi variabili d'ambiente (opzionale):
   ```
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```
5. Deploy!

### 2. Netlify

**Perché Netlify:**
- Deploy automatico
- Form handling
- Edge functions
- Split testing

**Passi:**
1. Vai su [netlify.com](https://netlify.com) e crea un account
2. Connetti il repository
3. Configurazioni:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`
4. Deploy automatico

### 3. GitHub Pages

**Limitazioni:** Solo per repository pubblici

**Passi:**
1. Aggiungi al `package.json`:
   ```json
   {
     "homepage": "https://your-username.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Installa gh-pages: `npm install --save-dev gh-pages`
3. Aggiungi base al `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... resto della config
   })
   ```
4. Deploy: `npm run deploy`

### 4. Firebase Hosting

**Passi:**
1. Installa Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Inizializza: `firebase init hosting`
4. Configura:
   - Public directory: `dist`
   - Single-page app: `Yes`
5. Build: `npm run build`
6. Deploy: `firebase deploy`

### 5. Surge.sh

**Semplice e veloce:**
```bash
npm install -g surge
npm run build
cd dist
surge
```

## 🛠️ Configurazione Avanzata

### Variabili d'Ambiente

Se vuoi usare le tue credenziali Supabase:

**File `.env`:**
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Sui servizi di hosting:**
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **GitHub Actions**: Repository Settings → Secrets

### Custom Domain

**Vercel:**
1. Project Settings → Domains
2. Aggiungi il tuo dominio
3. Configura DNS records

**Netlify:**
1. Site Settings → Domain Management
2. Aggiungi custom domain
3. Configura DNS

### SSL/HTTPS

Tutti i servizi moderni includono SSL automatico. Se usi un hosting personalizzato, assicurati di configurare HTTPS.

## 📊 Monitoraggio

### Analytics (Opzionale)

Aggiungi Google Analytics o altri servizi di tracking modificando `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Performance Monitoring

Considera l'aggiunta di:
- **Sentry** per error tracking
- **LogRocket** per session replay
- **Hotjar** per user behavior

## 🔧 Ottimizzazioni Pre-Deploy

### 1. Controlla le dipendenze
```bash
npm audit
npm update
```

### 2. Ottimizza bundle
```bash
npm run build
npx vite-bundle-analyzer dist/assets
```

### 3. Test di produzione
```bash
npm run build
npm run preview
```

### 4. Lighthouse audit
Usa Chrome DevTools per controllare performance, SEO, accessibility.

## 🚨 Troubleshooting

### Errori comuni:

**1. Build fallisce**
```bash
# Pulisci cache
rm -rf node_modules package-lock.json
npm install
```

**2. Routing non funziona**
Configura redirects per SPA:

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**3. Supabase connection issues**
- Controlla le credenziali
- Verifica CORS settings su Supabase
- Controlla le variabili d'ambiente

### Log debugging:

```bash
# Vercel
vercel logs

# Netlify
netlify logs

# Local
npm run build -- --debug
```

## 📈 CI/CD Automation

### GitHub Actions Example

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🎯 Raccomandazioni Finali

1. **Usa Vercel** per la migliore esperienza
2. **Configura monitoring** fin da subito
3. **Testa sempre** prima del deploy
4. **Backup** del database Supabase
5. **Documenta** le configurazioni

Happy Deploying! 🚀