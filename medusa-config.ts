module.exports = defineConfig({
    projectConfig: {
      redisUrl: process.env.REDIS_URL,
      workerMode: process.env.MEDUSA_WORKER_MODE as "server" | "worker" | "shared"
    },
    admin: {
      disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
      backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
    modules: [
      {
        resolve: "@medusajs/medusa/cache-redis",
        options: { redisUrl: process.env.REDIS_URL },
      },
      {
        resolve: "@medusajs/medusa/event-bus-redis",
        options: { redisUrl: process.env.REDIS_URL },
      },
      {
        resolve: "@medusajs/medusa/workflow-engine-redis",
        options: {
          redis: { url: process.env.REDIS_URL },
        },
      },
    ],
  })