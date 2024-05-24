FROM node:22.2.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Prismaの生成
COPY prisma ./prisma
RUN npx prisma generate

COPY . .
