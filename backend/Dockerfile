# Dockerfile
FROM node:22

# Crée le répertoire de l'app
WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code
COPY . .

# Expose le port (remplace par le bon pour chaque service)
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "start"]
