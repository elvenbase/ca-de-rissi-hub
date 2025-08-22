# Convenzioni Commit e Best Practices

## Formato Standard

### Struttura Base
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Componenti
1. **Type**: Tipo di modifica (obbligatorio)
2. **Scope**: Area del progetto (opzionale)
3. **Description**: Descrizione breve (obbligatorio)
4. **Body**: Descrizione dettagliata (opzionale)
5. **Footer**: Riferimenti issue, breaking changes (opzionale)

## Tipi di Commit

### Core Types
- `feat`: Nuova funzionalità
- `fix`: Correzione bug
- `docs`: Modifiche documentazione
- `style`: Formattazione, spazi, punti e virgola
- `refactor`: Refactoring codice (non bug fix)
- `test`: Aggiunta o modifica test
- `chore`: Task di manutenzione, build, tooling

### Extended Types
- `perf`: Miglioramenti performance
- `ci`: Modifiche CI/CD
- `build`: Modifiche build system
- `revert`: Revert di commit precedenti
- `security`: Fix di sicurezza
- `deps`: Aggiornamenti dipendenze

## Scope

### Esempi di Scope
- `auth`: Sistema di autenticazione
- `dashboard`: Dashboard principale
- `api`: API endpoints
- `ui`: Componenti UI
- `db`: Database e migrazioni
- `test`: Test e testing
- `docs`: Documentazione
- `deploy`: Deployment e CI/CD

### Quando Usare lo Scope
- ✅ Modifiche specifiche a un'area del progetto
- ✅ Breaking changes che impattano un'area specifica
- ❌ Modifiche generali che toccano tutto il progetto

## Description

### Regole
- **Maiuscola iniziale**
- **Nessun punto finale**
- **Imperativo presente** ("add" non "added")
- **Meno di 50 caratteri**
- **Descrittivo ma conciso**

### Esempi
```
✅ feat(auth): aggiunge autenticazione OAuth
✅ fix(dashboard): corregge visualizzazione statistiche
✅ docs(readme): aggiorna istruzioni installazione
❌ feat: aggiunge roba
❌ fix: corregge bug
❌ docs: aggiorna documentazione
```

## Body

### Quando Usare il Body
- Spiegazione dettagliata delle modifiche
- Motivazione delle scelte implementative
- Impatto delle modifiche
- Breaking changes

### Formato
```
feat(auth): aggiunge autenticazione OAuth

Implementa autenticazione OAuth con Google e GitHub.
- Aggiunge provider OAuth configurabili
- Implementa gestione token JWT
- Aggiunge middleware di autenticazione

Closes #123
```

## Footer

### Breaking Changes
```
feat(api): ristruttura endpoint utenti

BREAKING CHANGE: Gli endpoint /users/* sono stati sostituiti con /api/v2/users/*
```

### Riferimenti Issue
```
fix(dashboard): corregge visualizzazione statistiche

Closes #456
Fixes #789
Relates to #101
```

## Esempi Completi

### Feature
```
feat(dashboard): aggiunge widget statistiche avanzate

Implementa widget configurabili per visualizzare:
- Statistiche giocatori in tempo reale
- Grafici performance per periodo
- Filtri personalizzabili per data

Aggiunge anche sistema di caching per migliorare performance.

Closes #234
```

### Bug Fix
```
fix(auth): corregge validazione email duplicata

Il sistema non gestiva correttamente email con caratteri speciali.
Aggiunge validazione più robusta e gestione errori migliorata.

Fixes #567
```

### Refactoring
```
refactor(components): ristruttura sistema di form

- Estrae logica comune in hook personalizzati
- Semplifica gestione stato form
- Migliora type safety con TypeScript
- Riduce duplicazione codice

Non introduce breaking changes per gli utenti finali.
```

### Documentation
```
docs(readme): aggiorna istruzioni deployment

- Aggiunge sezione configurazione Netlify
- Aggiorna screenshot dashboard
- Corregge comandi npm obsoleti
- Aggiunge troubleshooting comune
```

### Chore
```
chore(deps): aggiorna dipendenze a versioni latest

- React 18.3.1 → 18.4.0
- Vite 5.4.1 → 5.5.0
- TypeScript 5.5.3 → 5.6.0

Rimuove dipendenze non utilizzate e aggiorna lock file.
```

## Regole Speciali

### Commit di Merge
```
Merge branch 'feature/user-management' into develop

feat: aggiunge gestione utenti completa
- CRUD utenti con validazione
- Sistema di permessi basato su ruoli
- Interfaccia amministrativa
```

### Revert
```
revert: feat(auth): aggiunge autenticazione OAuth

This reverts commit abc123def456.

La funzionalità OAuth ha causato problemi di sicurezza
che richiedono ulteriori indagini.
```

### Hotfix
```
fix(auth): correzione urgente vulnerabilità login

Identificata e corretta vulnerabilità XSS nel form di login.
Patch applicata immediatamente per sicurezza.

BREAKING CHANGE: Richiede riavvio server

Fixes #999
```

## Best Practices

### 1. Commit Frequenti
- ✅ Commit piccoli e focalizzati
- ✅ Un commit per ogni modifica logica
- ❌ Commit che mescolano modifiche diverse

### 2. Messaggi Chiari
- ✅ Descrizioni specifiche e actionable
- ✅ Riferimenti a issue quando appropriato
- ❌ Messaggi generici o vaghi

### 3. Coerenza
- ✅ Usa sempre lo stesso formato
- ✅ Mantieni convenzioni del team
- ❌ Mescola stili diversi

### 4. Review
- ✅ Rivedi messaggi prima del push
- ✅ Chiedi feedback se incerto
- ❌ Ignora feedback sui messaggi

## Tool e Integrazione

### Commitizen
```bash
npm install -g commitizen
npm install --save-dev cz-conventional-changelog
```

### Husky Hooks
```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

### Commitlint
```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

## Troubleshooting

### Commit Rifiutato
1. Verifica formato del messaggio
2. Controlla lunghezza description
3. Assicurati che il type sia valido
4. Verifica che lo scope sia appropriato

### Messaggio Troppo Lungo
1. Semplifica la description
2. Sposta dettagli nel body
3. Usa abbreviazioni appropriate
4. Mantieni focus su una modifica

### Scope Incerto
1. Usa scope generico se appropriato
2. Ometti scope se non necessario
3. Chiedi al team per chiarimenti
4. Documenta nuovi scope nel progetto
