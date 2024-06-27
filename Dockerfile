FROM node:lts as dependencies
WORKDIR /next-test-app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts as builder
WORKDIR /next-test-app
COPY . .
COPY --from=dependencies /next-test-app/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /next-test-app
ENV NODE_ENV production

COPY --from=builder /next-test-app/public ./public
COPY --from=builder /next-test-app/package.json ./package.json
COPY --from=builder /next-test-app/.next ./.next
COPY --from=builder /next-test-app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]