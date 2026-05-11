# Production image: Vite SPA (da-vinci) + Express API (api-server) on one origin.
# Set secrets at runtime: DATABASE_URL (required), optional CORS_ORIGINS.
# Fly.io sets PORT; default below matches local docker compose.

FROM node:24-bookworm-slim AS builder

WORKDIR /app
ENV CI=true

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json tsconfig.json ./
COPY lib ./lib
COPY artifacts ./artifacts
COPY scripts ./scripts

RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production
RUN pnpm --filter @workspace/da-vinci run build \
  && pnpm --filter @workspace/api-server run build

FROM node:24-bookworm-slim AS runner

WORKDIR /app/artifacts/api-server
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 appuser

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY --from=builder /app/lib /app/lib
COPY --from=builder /app/artifacts/api-server/dist ./dist
COPY --from=builder /app/artifacts/api-server/package.json ./package.json

USER appuser

EXPOSE 8080
ENV PORT=8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/api/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "--enable-source-maps", "dist/index.mjs"]
