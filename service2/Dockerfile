# Étape de construction
FROM node:18-alpine AS builder

WORKDIR /app

# Copiez les fichiers de configuration des dépendances
COPY package*.json ./
COPY tsconfig*.json ./

# Installez toutes les dépendances (y compris devDependencies)
#RUN npm install -g @nestjs/cli
#RUN npm install --include=dev

# Copiez le reste des fichiers
COPY . .

# Construisez l'application
RUN npm run build

# Étape d'exécution
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package*.json ./

# Installez uniquement les dépendances de production pour la phase d'exécution
RUN npm install --omit=dev

EXPOSE 3000 3001 3002 3003

CMD ["node", "dist/main"]