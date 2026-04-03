FROM node:20

RUN apt-get update && apt-get install -y --no-install-recommends curl unzip \
    && curl -fsSL https://bun.sh/install | bash \
    && rm -rf /var/lib/apt/lists/*

ENV BUN_INSTALL=/root/.bun
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

WORKDIR /app

COPY package.json bun.lock ./

# postinstall (nuxt prepare) требует исходники — откладываем до полного COPY
RUN bun install --ignore-scripts

COPY . .

RUN bun run postinstall

EXPOSE 3000

CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
