# Fix NextAuth v5 + Google OAuth su Vercel

## Problema Root Cause
L'errore `TypeError: o8 is not a constructor` era causato da:

1. **Inconsistenza versioni**: Il codice usava sintassi NextAuth v5, ma `package.json` aveva dipendenze v4
2. **Bug @auth/prisma-adapter@2.7.4**: Issue [#12325](https://github.com/nextauthjs/next-auth/issues/12325) conferma incompatibilità
3. **Bundling webpack**: PrismaAdapter non veniva bundle correttamente per l'edge runtime di Vercel

## Modifiche Effettuate

### 1. package.json
- ⬆️ `next-auth`: `^4.24.11` → `5.0.0-beta.25`
- ⬆️ `@auth/prisma-adapter`: aggiunto `2.7.2` (versione stabile)
- ❌ Rimosso `@next-auth/prisma-adapter` (vecchia v4)

### 2. next.config.mjs
- Aggiunto `webpack.externals` per `@auth/prisma-adapter`
- Aggiunto `serverExternalPackages` per `@prisma/client` e `prisma`

### 3. auth.ts
- Aggiunto `trustHost: true` (necessario per Vercel)
- Aggiunto `basePath: "/api/auth"`

### 4. lib/adapter.ts
- Aggiunto cast esplicito `as Adapter` per evitare errori TypeScript

## Comandi per il Deploy

```bash
# 1. Entra nella directory del progetto
cd /home/drs/.openclaw/workspace/projects/videopreprod-ai

# 2. Pulisci node_modules e reinstalla
rm -rf node_modules package-lock.json
npm install

# 3. Genera Prisma Client
npx prisma generate

# 4. Test build locale (opzionale)
npm run build

# 5. Commit e push
git add package.json next.config.mjs auth.ts lib/adapter.ts
npm run build
```

## Environment Variables Vercel (verifica)
Assicurati che siano configurati:
- `AUTH_URL=https://videopreprod-ai-v2.vercel.app`
- `AUTH_SECRET=<generato>`
- `GOOGLE_CLIENT_ID=<configurato>`
- `GOOGLE_CLIENT_SECRET=<configurato>`
- `DATABASE_URL=<funzionante>`

## Note
- `@auth/prisma-adapter@2.7.2` è stabile e compatibile con NextAuth v5
- Evita di aggiornare a 2.7.4 finché l'issue #12325 non è risolto
- Il `trustHost: true` è necessario per Vercel (l'host è trusted)
