# Gestione Branch e Protezioni

## Branch Strategy

### Branch Principali
- `main`: Branch di produzione, sempre stabile
- `develop`: Branch di sviluppo, integrazione features
- `staging`: Branch di test, pre-produzione

### Branch di Sviluppo
- `feature/*`: Nuove funzionalità
- `bugfix/*`: Correzioni bug
- `hotfix/*`: Correzioni urgenti per produzione

## Regole di Protezione

### Branch Protection Rules

#### main
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Restrict pushes that create files
- ✅ Allow force pushes: ❌
- ✅ Allow deletions: ❌

#### develop
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Allow force pushes: ❌
- ✅ Allow deletions: ❌

#### staging
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Allow force pushes: ❌
- ✅ Allow deletions: ❌

## Status Checks Richiesti

### Per tutti i branch protetti:
1. **build-and-test**: Deve passare
2. **deploy-preview**: Deve passare (per PR)

### Per main:
1. **build-and-test**: Deve passare
2. **deploy-to-netlify**: Deve passare

## Workflow di Sviluppo

### 1. Nuova Feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-feature
# Sviluppa la feature
git add .
git commit -m "feat: aggiunge nome-feature"
git push origin feature/nome-feature
# Crea Pull Request su develop
```

### 2. Bug Fix
```bash
git checkout develop
git pull origin develop
git checkout -b bugfix/descrizione-bug
# Corregge il bug
git add .
git commit -m "fix: corregge descrizione-bug"
git push origin bugfix/descrizione-bug
# Crea Pull Request su develop
```

### 3. Hot Fix per Produzione
```bash
git checkout main
git pull origin main
git checkout -b hotfix/descrizione-urgente
# Corregge il problema
git add .
git commit -m "fix: correzione urgente descrizione-urgente"
git push origin hotfix/descrizione-urgente
# Crea Pull Request su main
```

## Convenzioni Commit

### Formato
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Tipi
- `feat`: Nuova funzionalità
- `fix`: Correzione bug
- `docs`: Documentazione
- `style`: Formattazione codice
- `refactor`: Refactoring
- `test`: Test
- `chore`: Task di manutenzione

### Esempi
```
feat(auth): aggiunge autenticazione OAuth
fix(dashboard): corregge visualizzazione statistiche
docs(readme): aggiorna istruzioni installazione
style(components): formatta codice secondo standard
refactor(api): ristruttura chiamate API
test(forms): aggiunge test per validazione
chore(deps): aggiorna dipendenze
```

## Merge Strategy

### Squash and Merge
- **Quando**: Feature branch → develop/main
- **Perché**: Mantiene history pulita
- **Come**: GitHub PR con "Squash and merge"

### Rebase and Merge
- **Quando**: develop → main
- **Perché**: Mantiene linearità
- **Come**: GitHub PR con "Rebase and merge"

### Create a merge commit
- **Quando**: Solo se necessario
- **Perché**: Mantiene branch history
- **Come**: GitHub PR con "Create a merge commit"

## Configurazione GitHub

### 1. Branch Protection
1. Vai su `Settings > Branches`
2. Clicca "Add rule"
3. Inserisci pattern branch (es. `main`)
4. Configura le protezioni
5. Salva

### 2. Required Status Checks
1. In branch protection rule
2. Seleziona "Require status checks to pass before merging"
3. Cerca e seleziona i check richiesti
4. Salva

### 3. Review Requirements
1. In branch protection rule
2. Seleziona "Require pull request reviews before merging"
3. Configura numero di review richiesti
4. Salva

## Monitoraggio

### GitHub Insights
- Vai su `Insights > Network`
- Visualizza grafo dei branch
- Monitora attività merge

### Actions
- Vai su `Actions`
- Monitora workflow per branch
- Controlla status checks

## Troubleshooting

### Branch Protetto
- Verifica che tutti i check passino
- Assicurati che il branch sia aggiornato
- Richiedi review se necessario

### Merge Conflicts
- Risolvi conflitti localmente
- Aggiorna branch con `git pull origin main`
- Riapplica le modifiche

### Build Fallisce
- Controlla log GitHub Actions
- Verifica configurazione locale
- Testa build localmente prima del push
