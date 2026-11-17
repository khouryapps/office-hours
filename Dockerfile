FROM node:22-bookworm-slim

WORKDIR /app
ENV HUSKY=0 CYPRESS_INSTALL_BINARY=0

COPY . .
RUN yarn install --frozen-lockfile && yarn build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["sh", "infrastructure/coolify/start.sh"]
